const { createLead, loginLead, getHighQualityLeads } = require('../services/leadService');
const { leadValidation, loginValidation } = require('../utils/joiValidators');

exports.registerLead = async (req, res) => {
  try {
    const { error } = leadValidation.validate(req.body);
    if (error) return res.status(400).json({ success: false, message: error.details[0].message });

    const lead = await createLead(req.body);
    res.status(201).json({ success: true, message: 'Lead registered successfully', lead });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.loginLead = async (req, res) => {
  try {
    const { error } = loginValidation.validate(req.body);
    if (error) return res.status(400).json({ success: false, message: error.details[0].message });

    const { token, lead } = await loginLead(req.body);
    res.status(200).json({ success: true, message: 'Login successful', token, lead });
  } catch (err) {
    res.status(401).json({ success: false, message: err.message });
  }
};

exports.getHighQualityLeads = async (req, res) => {
  try {
    const leads = await getHighQualityLeads();
    res.status(200).json({ success: true, leads });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
};
