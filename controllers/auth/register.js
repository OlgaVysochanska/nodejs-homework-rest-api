const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");
const { nanoid } = require("nanoid");

const { HttpError, sendEmail } = require("../../helpers");

const { BASE_URL } = process.env;

const { User } = require("../../models");

const register = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      throw HttpError(409, "Email in use");
    }

    const hashPassword = await bcrypt.hash(password, 10);
    const avatarURL = gravatar.url(email);
    const verificationCode = nanoid();

    const result = await User.create({
      ...req.body,
      password: hashPassword,
      avatarURL,
      verificationCode,
    });

    const verifyEmail = {
      to: email,
      subject: "Verify email",
      html: `<a target="_blank" href="${BASE_URL}/api/auth/verify/${verificationCode}">Click verify email</a>`,
    };

    await sendEmail(verifyEmail);

    res.status(201).json({
      name: result.name,
      email: result.email,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = register;
