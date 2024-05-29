const express = require('express');

const { case: Case } = require('../models');

const router = express.Router();

router.get('/', async (req, res) => {
    const cases = await Case.findAll();

    res.json({cases})
})

router.get('/one', async (req, res) => {
    const singleCase = await Case.findOne({where: { "class" : "pandemic"}})

    res.json(singleCase)
})

router.get('/:id', async (req, res) => {
    const { id } = req.params;

    const singleCase = await Case.findByPk(Number(id))

    res.json(singleCase)
})

router.get('/class/:c', async (req, res) => {
    const { c } = req.params
    const cases = await Case.findAll({where: { "class" : c }})

    res.json(cases);
})

router.post('/add', async (req, res) => {
    const data = req.body;

    // ADD NEW CASE TO DATABASE
    const newCase = {
        patient_count: data.patient_count,
        start_date: new Date(data.start_date),
        end_date: new Date(data.end_date),
        class: data.class
    }

    console.log('newCase', newCase);

    const createdCase = await Case.create(newCase)

    res.status(201).send(`Case Created: ${createdCase.case_id}`)
})


module.exports = router;