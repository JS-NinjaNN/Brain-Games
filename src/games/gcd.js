import runGcd from '../index.js';
import { getRandomNumber } from '../utils.js';

const rules = 'Find the greatest common divisor of given numbers.';
const min = 1;
const max = 50;

const getGCD = (x, y) => {
  let answer;
  let i = x > y ? x : y;
  while (i > 0) {
    if (x % i === 0 && y % i === 0) {
      answer = i;
      break;
    }
    i -= 1;
  }
  return answer;
};

const getNewRounds = () => {
  const givenNumberOne = getRandomNumber(min, max);
  const givenNumberTwo = getRandomNumber(min, max);
  const question = (`Question: ${givenNumberOne} ${givenNumberTwo}`);
  const correctAnswer = (String(getGCD(givenNumberOne, givenNumberTwo)));
  return [question, correctAnswer];
};

const brainGcd = () => {
  runGcd(rules, getNewRounds());
};

export default brainGcd;
