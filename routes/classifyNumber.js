const express = require("express");
const { classifyNumber } = require("../utils/mathUtils");
const fetchFunFact = require("../utils/fetchFunFact");
const validateInput = require("../middlewares/validateInput");

const router = express.Router();

router.get("/classify-number", validateInput, async (req, res) => {
  const num = req.number;
  const classification = classifyNumber(num);
  const funFact = await fetchFunFact(num);

  return res.json({
    number: num,
    ...classification,
    fun_fact: funFact,
  });
});

module.exports = router;
