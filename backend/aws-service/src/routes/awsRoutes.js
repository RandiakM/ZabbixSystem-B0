const express = require('express');
const awsController = require('../controllers/awsController');

const router = express.Router();

// Save AWS keys
router.post('/keys', awsController.saveKeys);

// Validate AWS keys
router.post('/validate', awsController.validateKeys);

module.exports = router; // Correct export