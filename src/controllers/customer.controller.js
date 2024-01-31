const CustomerSchema = require("../models/customer.model");

const createCustomer = async (req, res) => {
  try {
    const {
      lastName,
      firstName,
      phoneNumber,
      email,
      website,
      currentMarket,
      currentSelling,
      orderVolume,
      detail,
      company
    } = req.body;

    const created = await CustomerSchema.create({
      lastName,
      firstName,
      phoneNumber,
      email,
      website,
      currentMarket,
      currentSelling,
      orderVolume,
      detail,
      company
    });

    return res.status(201).json(created);
  } catch (error) {
    return res.status(404).json({ error: error });
  }
};

const getCustomer = async (req, res) => {
  try {
    const customer = await CustomerSchema.find().sort({ createdAt: -1 });
    return res.status(200).json({ customer });
  } catch (error) {
    return res.status(404).json({ error: error });
  }
};
module.exports = { getCustomer, createCustomer };
