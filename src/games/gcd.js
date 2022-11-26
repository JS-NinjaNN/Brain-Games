import run from '../index.js';
import { getRandomNumber } from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';
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

const getNewRound = () => {
  const number1 = getRandomNumber(min, max);
  const number2 = getRandomNumber(min, max);
  const question = `${number1} ${number2}`;
  const correctAnswer = String(getGCD(number1, number2));
  return [question, correctAnswer];
};

const runGcd = () => {
  const rounds = [];
  for (let i = 0; i < 3; i += 1) {
    rounds.push(getNewRound());
  }
  run(description, rounds);
};

export default runGcd;
