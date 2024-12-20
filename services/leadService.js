const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Lead = require('../models/Lead');

exports.createLead = async (leadData) => {
  const hashedPassword = await bcrypt.hash(leadData.password, 10);
  return await Lead.create({ ...leadData, password: hashedPassword });
};

exports.loginLead = async ({ email, password }) => {
  const lead = await Lead.findOne({ where: { email } });
  if (!lead || !(await bcrypt.compare(password, lead.password))) {
    throw new Error('Invalid email or password');
  }

  const token = jwt.sign({ id: lead.id, email: lead.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
  return { token, lead };
};

exports.getHighQualityLeads = async () => {
  return await Lead.findAll({ where: { leadStatus: 'high-quality' } });
};
