import { Request, Response } from 'express';
import { db } from '../utils/db';


export const getBooks = async (req: Request, res: Response) => {
  try {
    const [rows] = await db.query('SELECT * FROM books');
    res.json(rows);
  } catch (err) {
    console.error('DATABASE ERROR (GET /books):', err);
    res.status(500).json({
      message: 'Database query failed',
      error: err
    });
  }
};

export const addBook = async (req: Request, res: Response) => {
  try {
    const {
      title,
      author,
      isbn,
      pages,
      available_copies,
      publisher,
      publication_year
    } = req.body;

    const [result] = await db.query(
      `INSERT INTO books
       (title, author, isbn, pages, available_copies, publisher, publication_year)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [title, author, isbn, pages, available_copies, publisher, publication_year]
    );

    res.json({
      message: 'Book added successfully',
      result
    });
  } catch (err) {
    console.error('DATABASE ERROR (POST /books):', err);
    res.status(500).json({
      message: 'Insert failed',
      error: err
    });
  }
};
