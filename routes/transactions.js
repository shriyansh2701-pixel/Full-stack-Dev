const express = require('express');
const router = express.Router();
const Transaction = require('../models/Transaction');

// 1. Get all transactions from MongoDB
router.get('/', async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.status(200).json({ success: true, data: transactions });
  } catch (err) {
    res.status(500).json({ success: false, error: 'Server Error' });
  }
});

// 2. Add a new transaction to MongoDB
router.post('/', async (req, res) => {
  try {
    const transaction = await Transaction.create(req.body);
    res.status(201).json({ success: true, data: transaction });
// Change this line in your routes/transactions.js
} catch (err) {
    res.status(400).json({ 
        success: false, 
        error: err.message // This will show the actual validation error
    });
}
});

module.exports = router;