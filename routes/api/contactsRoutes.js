const express = require("express");

const {
  getContacts,
  getContactById,
  postContact,
  deleteContact,
  changeContact,
  updateStatusContact,
} = require("../../controllers");
const {
  addContactSchema,
  patchContactSchema,
  updateFavoriteSchema,
} = require("../../schemas");

const { authenticate } = require("../../middlewares");

const router = express.Router();

router.get("/", authenticate, getContacts);

router.get("/:id", authenticate, getContactById);

router.post("/", authenticate, addContactSchema, postContact);

router.delete("/:id", authenticate, deleteContact);

router.put("/:id", authenticate, patchContactSchema, changeContact);

router.patch(
  "/:id/favorite",
  authenticate,
  updateFavoriteSchema,
  updateStatusContact
);

module.exports = router;
