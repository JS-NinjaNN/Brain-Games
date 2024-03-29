import run from '../index.js';
import { getRandomNumber } from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const minNumber = -10;
const maxNumber = 50;

const isPrime = (num: number): boolean => {
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

const getRound = (): [string, string] => {
  const number = getRandomNumber(minNumber, maxNumber);
  const question = String(number);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const runPrime = (): void => {
  run(description, getRound);
};

export default runPrime;
