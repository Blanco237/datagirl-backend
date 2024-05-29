const express = require("express");
const { doctor: Doctor, patient: Patient } = require("../models");

const router = express.Router();

router.get("/", async (req, res) => {
  const doctors = await Doctor.findAll({
    attributes: ["doctor_id", "first_name", "last_name", "specialty"],
    include: {
      model: Patient,
      attributes: ["patient_id", "first_name", "last_name"],
    },
  });

  res.json(doctors);
});

router.get("/patients", async (req, res) => {
  const doctor = req.user;

  const patients = await Patient.findAll({
    where: { doctor_id: doctor.doctor_id },
  });

  res.json(patients);
});

module.exports = router;
