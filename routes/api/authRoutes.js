const express = require("express");

const {
  register,
  login,
  getCurrent,
  logout,
  updateSubscription,
} = require("../../controllers");

const {
  registerSchema,
  loginSchema,
  updateSubscriptionSchema,
} = require("../../schemas");

const { authenticate } = require("../../middlewares");

const router = express.Router();

router.post("/register", registerSchema, register);

router.post("/login", loginSchema, login);

router.get("/current", authenticate, getCurrent);

router.patch(
  "/:id/subscription",
  authenticate,
  updateSubscriptionSchema,
  updateSubscription
);

router.post("/logout", authenticate, logout);

module.exports = router;
