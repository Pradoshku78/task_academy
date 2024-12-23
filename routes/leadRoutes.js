const express = require('express');
const { registerLead, loginLead, getHighQualityLeads } = require('../controllers/leadController');
const { authenticate } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/register', registerLead);
router.post('/login', loginLead);
router.get('/high-quality-leads',
     //authenticate,
     getHighQualityLeads);

module.exports = router;
