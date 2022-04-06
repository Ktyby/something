const mongoose = require("mongoose");

const KateSchema = new mongoose.Schema({}, { strict: false });

const kotiksData = mongoose.model("kotiksData", KateSchema);

const createKotik = async (data) => {
  return kotiksData.create({ ...data });
};

const getKotik = async (kotikId) => {
  return await kotiksData.find({ _id: kotikId });
};

module.exports = {
  createKotik,
  getKotik,
};
