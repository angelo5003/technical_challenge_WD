const express = require("express");
const phoneRouter = express.Router();
const allPhones = require("../data/phones.json");

phoneRouter.get("/", (req, res) => {
  res.json(allPhones);
});

phoneRouter.get("/:phoneId", (req, res) => {
  const { phoneId } = req.params;
  const phoneSelected = allPhones.filter((phone) => {
    console.log(phoneId);
    return phone.id == phoneId;
  });
  res.json(phoneSelected[0]);
});

module.exports = phoneRouter;
