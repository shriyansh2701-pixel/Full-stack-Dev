const dns = require('dns'); // Add this line
dns.setServers(['8.8.8.8', '8.8.4.4']); // And this one (Google's Public DNS)

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// 1. Load the secrets from your .env file
dotenv.config();

const app = express();
app.use(express.json());

// 2. Connect to MongoDB using the variable from .env
// We add .then() for success and .catch() for errors
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ Success: MongoDB is Connected to Shriyansh Cluster!');
  })
  .catch((err) => {
    console.log('❌ Database Connection Error:');
    console.error(err.message);
  });

app.get('/', (req, res) => {
  res.send('Server is alive and checking Database...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is purring on http://localhost:${PORT}`);
});
// Add this near the top with other imports
const transactions = require('./routes/transactions');

// Add this after app.use(express.json())
app.use('/api/v1/transactions', transactions);