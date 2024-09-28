// backend/server.js
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const scriptRoutes = require('./routes/scriptRoutes'); // Import script routes

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', scriptRoutes); // This means your endpoint is '/api/scripts'
app.use('/api/auth', authRoutes);
app.use('/api/scripts', scriptRoutes); // Use script routes

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
