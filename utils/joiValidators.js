const Joi = require('joi');

exports.leadValidation = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  interests: Joi.string().optional(),
  region: Joi.string().optional(),
});

exports.loginValidation = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});
