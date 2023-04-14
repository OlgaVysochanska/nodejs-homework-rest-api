const { Contact } = require("../../models");

const getContacts = async (req, res, next) => {
  try {
    const { _id: owner } = req.user;
    const { page = 1, limit = 20 } = req.query;
    const skip = (page - 1) * limit;
    // const { favourite } = req.query;
    // if (favourite) {
    //   const result = await Contact.find(
    //     { owner },
    //     { skip, limit },
    //     { favourite }
    //   ).populate("owner", "name email");
    //   res.json(result);
    //   return;
    // }
    const result = await Contact.find({ owner }, { skip, limit }).populate(
      "owner",
      "name email"
    );
    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = getContacts;
