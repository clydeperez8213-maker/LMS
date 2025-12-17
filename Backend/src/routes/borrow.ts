import express from 'express';
import { borrowBook, returnBook, updateReturn, payPenalty } from '../controllers/borrowController';

const router = express.Router();

router.post('/borrow', borrowBook);
router.post('/return', returnBook);
router.put('/updateReturn', updateReturn);
router.put('/payPenalty', payPenalty);

export default router;
