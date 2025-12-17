import express from 'express';
import cors from 'cors';
import studentsRoutes from './routes/students';
import booksRoutes from './routes/books';
import borrowRoutes from './routes/borrow';
import staffRoutes from './routes/staff';


const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());


app.use('/students', studentsRoutes);
app.use('/books', booksRoutes);
app.use('/borrow', borrowRoutes);
app.use('/staff', staffRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
