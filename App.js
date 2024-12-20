require('dotenv').config();
const express = require('express');
const sequelize = require('./config/db');
const leadRoutes = require('./routes/leadRoutes');

const app = express();
app.use(express.json());

// Routes
app.use('/api/v1', leadRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
