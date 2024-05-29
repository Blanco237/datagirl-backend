const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { doctor: Doctor } = require("../models");
const APP_CONFIGS = require("../appConfig");

const router = express.Router();

const hashPassword = async (password) => {
  const saltRounds = Number(APP_CONFIGS.BCRYPT_SALT_ROUNDS);
  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(password, salt);

  return hashedPassword;
};

router.post("/doctor/add", async (req, res) => {
  const data = req.body;

  data.dob = new Date(data.dob);
  const hash = await hashPassword(data.password);
  data.password = hash;

  const createdDoctor = await Doctor.create(data);

  res.status(201).json(createdDoctor);
});

const secret = APP_CONFIGS.JWT_SECRET;

const generateToken = (data) => {
  const token = jwt.sign(JSON.stringify(data), secret);

  return token;
};

router.post("/doctor/login", async (req, res) => {
  console.log(req.body);
  const { username, password } = req.body;

  const user = await Doctor.findOne({ where: { username } });

  if (!user) {
    return res.status(400).json({ error: "User Not Found" });
  }

  const match = await bcrypt.compare(password, user.password);

  if (match === false) {
    return res.status(400).json({ error: "Invalid Password" });
  }

  const token = generateToken(user);

  res.json({
    user,
    token,
  });
});

module.exports = router;
