const express = require('express');
const connectDB = require('./config/db');
const expenseRoutes = require('./routes/expenseRoutes');
const cors = require('cors');
require('dotenv').config();
const app = express();
connectDB();
app.use(express.json());
app.use(cors());
app.use('/api', expenseRoutes);
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
