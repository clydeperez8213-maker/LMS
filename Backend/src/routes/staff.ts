import express from 'express';
import { getStaff, addStaff, updateStaff, deleteStaff } from '../controllers/staffController';

const router = express.Router();

router.get('/', getStaff);        
router.post('/', addStaff);       
router.put('/', updateStaff);     
router.delete('/', deleteStaff);

export default router;