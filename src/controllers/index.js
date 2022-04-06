const data = require("../models/index");

const handleCreateKotiks = async (req, res) => {
  try {
    const result = await data.createKotik(req.body);

    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ error });
  }
};

const handleGetKotiks = async (req, res) => {
  try {
    const result = await data.getKotik(req.body.id);

    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ error });
  }
};

module.exports = {
  handleCreateKotiks,
  handleGetKotiks,
};
