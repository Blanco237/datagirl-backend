const express = require("express");
const mathService = require("../services/mathService");

const router = express.Router();

router.post("/add", (req, res) => {
  const stuff = req.body;
  const { number1, number2 } = stuff;
  try {
    if (number1 && number2) {
      if (typeof number1 !== "number") {
        res.status(400).json({
          error: `Expected number for parameter number1. Received ${typeof number1}`,
        });
        return;
      }
      if (typeof number2 !== "number") {
        res.status(400).json({
          error: `Expected number for parameter number2. Received ${typeof number2}`,
        });
        return;
      }

      const result = number1 + number2;
      res.sendStatus(500);
      // res.json({ result });
    } else {
      res
        .status(400)
        .json({ error: "Missing parameters (number1 and number2)" });
    }
  } catch (e) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/compare", (req, res) => {
  const { person1, person2 } = req.body;
  try {
    if (person1.name === person2.name && person1.age === person2.age) {
      res.json({ match: "true" });
      return;
    }
    res.json({ match: "false" });
  } catch (e) {
    console.log(e);
    res.json({ error: "Invalid Data Format" });
  }
});

router.post("/calculate", (req, res) => {
  const { operation, num1, num2 } = req.body;
  const math = new mathService();
  const result = math.getResult(operation, num1, num2)
  const responseObj = {
    result,
  };
  res.json(responseObj);
});

router.post("/calculate/many", (req, res) => {
  console.log('Request made it')
  const data = req.body;
  const math = new mathService();
  const results = math.calculateMany(data);
  res.json(results);
});

module.exports = router;
