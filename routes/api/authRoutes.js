const express = require("express");

const {
  register,
  login,
  getCurrent,
  logout,
  updateSubscription,
  updateAvatar,
  verify,
  resendVerifyEmail,
} = require("../../controllers");

const {
  registerSchema,
  loginSchema,
  updateSubscriptionSchema,
  emailSchema,
} = require("../../schemas");

const { authenticate, upload } = require("../../middlewares");

const router = express.Router();

router.post("/register", registerSchema, register);

router.get("/verify/:verificationCode", verify);

router.post("/verify", emailSchema, resendVerifyEmail);

router.post("/login", loginSchema, login);

router.get("/current", authenticate, getCurrent);

router.patch(
  "/:id/subscription",
  authenticate,
  updateSubscriptionSchema,
  updateSubscription
);

router.post("/logout", authenticate, logout);

router.patch("/avatars", authenticate, upload.single("avatar"), updateAvatar);

module.exports = router;
