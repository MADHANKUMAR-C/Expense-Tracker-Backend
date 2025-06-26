const express = require('express');
const expenseRoutes = require('./routes/expenseRoutes').default;
const cors = require('cors');
require('dotenv').config();
const app = express();
app.use(express.json());
app.use(cors());
app.use('/api', expenseRoutes);
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
