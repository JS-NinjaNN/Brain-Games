import run from '../index.js';
import { getRandomNumber } from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';
const min = 1;
const max = 50;

const getGCD = (x, y) => (x % y ? getGCD(y, x % y) : y);

const getRound = () => {
  const number1 = getRandomNumber(min, max);
  const number2 = getRandomNumber(min, max);
  const question = `${number1} ${number2}`;
  const correctAnswer = String(getGCD(number1, number2));
  return [question, correctAnswer];
};

const runGcd = () => {
  run(description, getRound);
};

export default runGcd;
