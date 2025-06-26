const express = require('express');
const router = express.Router();
<<<<<<< main
const { getExpenses, createExpense, updateExpense, deleteExpense } = require('../controllers/expenseController');
=======
const { getExpenses, createExpense, updateExpense, deleteExpense} = require('../controllers/expenseController');
>>>>>>> master
router.get('/expenses', getExpenses);
router.post('/expenses', createExpense);
router.put('/expenses/:id', updateExpense);
router.delete('/expenses/:id', deleteExpense);
<<<<<<< main
module.exports = router;
=======
module.exports = router;
>>>>>>> master
