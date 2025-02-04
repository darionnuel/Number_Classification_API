const validateInput = (req, res, next) => {
  const { number } = req.query;

  if (!number || isNaN(number)) {
    return res.status(400).json({ number, error: true });
  }

  req.number = parseInt(number, 10);
  next();
};

module.exports = validateInput;
