const express = require('express');

const { patient: Patient, doctor: Doctor } = require('../models');
const { sendWelcomeMail } = require('../services/mailer');

const router = express.Router();

router.get('/', async (req, res) => {
    const patients = await Patient.findAll({ include: {
        model: Doctor,
        attributes: ["doctor_id", "first_name", "last_name", 'specialty']
    } });

    res.json(patients)
})

router.post('/add', async (req, res) => {
    const data = req.body;

    data.dob = new Date(data.dob);

    const createdPatient = await Patient.create(data);

    sendWelcomeMail(createdPatient.email);

    res.status(201).json(createdPatient);
})



module.exports = router;