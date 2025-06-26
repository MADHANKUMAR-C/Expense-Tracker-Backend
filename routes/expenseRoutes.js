import { Router } from 'express';
const router = Router();
import { getExpenses, createExpense, updateExpense, deleteExpense } from '../controllers/expenseController';
router.get('/expenses', getExpenses);
router.post('/expenses', createExpense);
router.put('/expenses/:id', updateExpense);
router.delete('/expenses/:id', deleteExpense);
export default router;