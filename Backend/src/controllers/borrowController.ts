import { Request, Response } from 'express';
import { db } from '../utils/db';


export const borrowBook = async (req: Request, res: Response) => {
  try {
    const { student_ID, book_ID, staff_ID } = req.body;


    const [bookRows]: any = await db.query('SELECT available_copies FROM books WHERE book_ID = ?', [book_ID]);
    if (bookRows.length === 0) return res.status(404).json({ message: 'Book not found' });
    if (bookRows[0].available_copies <= 0) return res.status(400).json({ message: 'No copies available' });


    const borrowDate = new Date();
    const dueDate = new Date();
    dueDate.setDate(borrowDate.getDate() + 14);

    const [result]: any = await db.query(
      `INSERT INTO borrowing_transaction 
       (student_ID, book_ID, staff_ID, borrow_date, due_date, status) 
       VALUES (?, ?, ?, ?, ?, ?)`,
      [student_ID, book_ID, staff_ID || null, borrowDate, dueDate, 'borrowed']
    );


    await db.query('UPDATE books SET available_copies = available_copies - 1 WHERE book_ID = ?', [book_ID]);

    res.json({ message: 'Book borrowed successfully', transaction_ID: result.insertId });
  } catch (err: any) {
    console.error('DATABASE ERROR (POST /borrow):', err.message || err);
    res.status(500).json({ message: 'Failed to borrow book', error: err.message || err });
    }
};

export const returnBook = async (req: Request, res: Response) => {
  try {
    const { transaction_ID, staff_ID } = req.body;

    
    const [rows]: any = await db.query(
      'SELECT * FROM borrowing_transaction WHERE transaction_ID = ? AND status = "borrowed"',
      [transaction_ID]
    );

    if (rows.length === 0) {
      return res.status(404).json({ message: 'Active borrowing transaction not found' });
    }

    const transaction = rows[0];
    const today = new Date();
    const dueDate = new Date(transaction.due_date);

    let status = 'returned';
    let penaltyAmount = 0;
    let reason = null;

    
    if (today > dueDate) {
      status = 'late';

      const diffDays = Math.ceil(
        (today.getTime() - dueDate.getTime()) / (1000 * 60 * 60 * 24)
      );

      penaltyAmount = diffDays * 10; 
      reason = 'Late return';
    }

    
    await db.query(
      `UPDATE borrowing_transaction
       SET return_date = ?, status = ?, staff_ID = ?
       WHERE transaction_ID = ?`,
      [today, status, staff_ID || null, transaction_ID]
    );

    
    await db.query(
      'UPDATE books SET available_copies = available_copies + 1 WHERE book_ID = ?',
      [transaction.book_ID]
    );

    
    if (status === 'late') {
      await db.query(
        `INSERT INTO penalty (student_id, transaction_id, amount, reason, date_issued, date_paid, staff_id)
         VALUES (?, ?, ?, ?, CURDATE(), NULL, ?)`,
        [transaction.student_id, transaction_ID, penaltyAmount, reason, staff_ID || null]
      );
    }

    res.json({
      message: 'Book returned successfully',
      status,
      penaltyAmount
    });

  } catch (err: any) {
    console.error('RETURN BOOK ERROR:', err.message);
    res.status(500).json({
      message: 'Failed to return book',
      error: err.message
    });
  }
};

export const updateReturn = async (req: Request, res: Response) => {
  try {
    const { transaction_ID, staff_ID, reason } = req.body;

    if (!transaction_ID || !staff_ID) {
      return res.status(400).json({ message: 'transaction_ID and staff_ID are required' });
    }

    
    await db.query(
      'UPDATE borrowing_transaction SET staff_ID = ? WHERE transaction_ID = ?',
      [staff_ID, transaction_ID]
    );

    
    await db.query(
      'UPDATE penalty SET staff_id = ?, reason = ? WHERE transaction_id = ?',
      [staff_ID, reason || 'Late return', transaction_ID]
    );

    res.json({
      message: 'Return/penalty updated successfully'
    });

  } catch (err: any) {
    console.error('UPDATE RETURN ERROR:', err.message);
    res.status(500).json({
      message: 'Failed to update return',
      error: err.message
    });
  }
};

export const payPenalty = async (req: Request, res: Response) => {
  try {
    const { penalty_ID, staff_ID } = req.body;

    if (!penalty_ID || !staff_ID) {
      return res.status(400).json({ message: 'penalty_ID and staff_ID are required' });
    }

    
    const [result]: any = await db.query(
      `UPDATE penalty 
       SET date_paid = CURDATE(), staff_id = ? 
       WHERE penalty_id = ? AND date_paid IS NULL`,
      [staff_ID, penalty_ID]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        message: 'Penalty not found or already paid'
      });
    }

    res.json({ message: 'Penalty marked as paid successfully' });

  } catch (err: any) {
    console.error('PAY PENALTY ERROR:', err.message);
    res.status(500).json({
      message: 'Failed to mark penalty as paid',
      error: err.message
    });
  }
};
