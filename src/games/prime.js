import runPrime from '../index.js';
import { getRandomNumber } from '../utils.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const min = 2;
const max = 100;

const isPrime = (num) => {
  let isTwo = 0;
  for (let i = 1; i <= num; i += 1) {
    if (num % i === 0) {
      isTwo += 1;
    }
  }
  const result = isTwo === 2 ? 'yes' : 'no';
  return result;
};

const getNewRounds = () => {
  const randomNumber = getRandomNumber(min, max);
  const question = (`Question: ${randomNumber}`);
  const correctAnswer = (String(isPrime(randomNumber)));
  return [question, correctAnswer];
};

const brainPrime = () => {
  runPrime(rules, getNewRounds());
};

export default brainPrime;
