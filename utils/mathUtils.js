// Check if a number is prime
const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

// Check if a number is a Perfect Number
const isPerfect = (num) => {
  let sum = 0;
  for (let i = 1; i < num; i++) {
    if (num % i === 0) sum += i;
  }
  return sum === num;
};

// Check if a number is an Armstrong number
const isArmstrong = (num) => {
  const digits = num.toString().split("").map(Number);
  const power = digits.length;
  const sum = digits.reduce((acc, digit) => acc + Math.pow(digit, power), 0);
  return sum === num;
};

// Get sum of digits
const digitSum = (num) => {
  return num
    .toString()
    .split("")
    .reduce((sum, digit) => sum + Number(digit), 0);
};

// Classify properties of a number
const classifyNumber = (num) => {
  let properties = [];
  if (isArmstrong(num)) properties.push("armstrong");
  properties.push(num % 2 === 0 ? "even" : "odd");

  return {
    is_prime: isPrime(num),
    is_perfect: isPerfect(num),
    properties,
    digit_sum: digitSum(num),
  };
};

module.exports = { isPrime, isPerfect, isArmstrong, digitSum, classifyNumber };
