const {
  getContacts,
  getContactById,
  postContact,
  deleteContact,
  changeContact,
  updateStatusContact,
} = require("./contacts");

const {
  register,
  login,
  getCurrent,
  logout,
  updateSubscription,
} = require("./auth");

module.exports = {
  getContacts,
  getContactById,
  postContact,
  deleteContact,
  changeContact,
  updateStatusContact,
  register,
  login,
  getCurrent,
  logout,
  updateSubscription,
};
