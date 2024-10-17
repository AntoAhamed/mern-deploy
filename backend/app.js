const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const connectDB = require('./config/db');  // Import the connectDB function

dotenv.config();

connectDB();  // Connect to MongoDB

const app = express();

// Middleware
const corsOptions = {
    origin: "hhttps://mern-deploy-client-i7b2.onrender.com" // frontend URI (ReactJS)
}
app.use(cors(corsOptions));
app.use(bodyParser.json());

// Routes
const routes = require('./routes/routes');
app.use('/api/routes', routes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});