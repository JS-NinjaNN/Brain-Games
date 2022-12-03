import run from '../index.js';
import { getRandomNumber } from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const min = -10;
const max = 50;

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  const limit = Math.sqrt(num);
  for (let i = 2; i <= limit; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getRound = () => {
  const number = getRandomNumber(min, max);
  const question = String(number);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const runPrime = () => {
  run(description, getRound);
};

export default runPrime;
