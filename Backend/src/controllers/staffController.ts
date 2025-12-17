import { Request, Response } from 'express';
import { db } from '../utils/db';



export const getStaff = async (req: Request, res: Response) => {
  try {
    const [rows] = await db.query('SELECT * FROM staff');
    res.json(rows);
  } catch (err) {
    console.error('DATABASE ERROR (GET /staff):', err);
    res.status(500).json({ message: 'Failed to fetch staff', error: err });
  }
};


export const addStaff = async (req: Request, res: Response) => {
  try {
    const { first_name, last_name, email, phone_number, position, date_hired } = req.body;
    const [result]: any = await db.query(
      'INSERT INTO staff (first_name, last_name, email, phone_number, position, date_hired) VALUES (?, ?, ?, ?, ?, ?)',
      [first_name, last_name, email, phone_number, position, date_hired]
    );
    res.json({ message: 'Staff added successfully', staff_ID: result.insertId });
  } catch (err) {
    console.error('DATABASE ERROR (POST /staff):', err);
    res.status(500).json({ message: 'Failed to add staff', error: err });
  }
};

export const updateStaff = async (req: Request, res: Response) => {
  try {
    const { staff_ID } = req.params;
    const { first_name, last_name, email, phone_number, position, date_hired } = req.body;
    await db.query(
      'UPDATE staff SET first_name = ?, last_name = ?, email = ?, phone_number = ?, position = ?, date_hired = ? WHERE staff_ID = ?')
      res.json({ message: 'Staff updated successfully' });
  } catch (err) {
    console.error('DATABASE ERROR (PUT /staff/:staff_ID):', err);
    res.status(500).json({ message: 'Failed to update staff', error: err });
  }
};

  export const deleteStaff = async (req: Request, res: Response) => {
  try {
    const { staff_ID } = req.params;
    const { first_name, last_name, email, phone_number, position, date_hired } = req.body;
    await db.query(
      'DELETE FROM staff WHERE staff_ID = ?', [staff_ID]);
    res.json({ message: 'Staff deleted successfully' });
  } catch (err) {
    console.error('DATABASE ERROR (DELETE /staff/:staff_ID):', err);
    res.status(500).json({ message: 'Failed to delete staff', error: err });
  }
};