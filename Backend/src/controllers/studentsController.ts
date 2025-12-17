import { Request, Response } from 'express';
import { db } from '../utils/db';


export const getStudents = async (req: Request, res: Response) => {
  try {
    const [rows] = await db.query('SELECT * FROM students');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch students' });
  }
};


export const addStudent = async (req: Request, res: Response) => {
  try {
    const { first_name, last_name, lrn, phone_number, email, favorite_genre, monthly_reading_goal } = req.body;
    const [result] = await db.query(
      'INSERT INTO students (first_name, last_name, lrn, phone_number, email, favorite_genre, monthly_reading_goal) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [first_name, last_name, lrn, phone_number, email, favorite_genre, monthly_reading_goal]
    );
    res.json({ message: 'Student added', studentId: (result as any).insertId });
  } catch (err) {
    res.status(500).json({ error: 'Failed to add student' });
  }
};
