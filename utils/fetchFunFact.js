const axios = require("axios");

const fetchFunFact = async (num) => {
  try {
    const response = await axios.get(`http://numbersapi.com/${num}/math?json`);
    return response.data.text;
  } catch (error) {
    console.error("Error fetching fun fact:", error.message);
    return "No fun fact available.";
  }
};

module.exports = fetchFunFact;
