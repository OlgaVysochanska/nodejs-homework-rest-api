const Joi = require("joi");

const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

module.exports = {
  registerSchema: async (req, res, next) => {
    const addSchema = Joi.object({
      name: Joi.string().required(),
      email: Joi.string().pattern(emailRegexp).required(),
      password: Joi.string().min(6).required(),
    });
    const validationResult = addSchema.validate(req.body);
    if (validationResult.error) {
      return res.status(400).json({ status: validationResult.error.details });
    }

    next();
  },
  loginSchema: async (req, res, next) => {
    const addSchema = Joi.object({
      email: Joi.string().pattern(emailRegexp).required(),
      password: Joi.string().min(6).required(),
    });
    const validationResult = addSchema.validate(req.body);
    if (validationResult.error) {
      return res.status(400).json({ status: validationResult.error.details });
    }

    next();
  },
  updateSubscriptionSchema: async (req, res, next) => {
    const addSchema = Joi.object({
      subscription: Joi.string(),
    });
    const validationResult = addSchema.validate(req.body);
    if (validationResult.error) {
      return res.status(400).json({ status: validationResult.error.details });
    }
    next();
  },
};
