const { HttpError } = require("../../helpers");

const { User } = require("../../models");

const updateSubscription = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await User.findByIdAndUpdate(id, req.body, { new: true });
    if (!result) {
      throw HttpError(404, `User with ${id} not found`);
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = updateSubscription;