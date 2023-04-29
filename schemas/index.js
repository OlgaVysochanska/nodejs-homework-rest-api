const {
  addContactSchema,
  patchContactSchema,
  updateFavoriteSchema,
} = require("./contactsValidation");

const {
  registerSchema,
  loginSchema,
  updateSubscriptionSchema,
  emailSchema,
} = require("./userValidation");

module.exports = {
  addContactSchema,
  patchContactSchema,
  updateFavoriteSchema,
  registerSchema,
  loginSchema,
  updateSubscriptionSchema,
  emailSchema,
};
