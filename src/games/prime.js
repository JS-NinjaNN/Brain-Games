import runPrime from '../index.js';
import getRandomNumber from '../utils.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const minNum = 2;
const maxNum = 100;

const isPrime = (num) => {
  let isZero = 0;
  for (let i = 1; i <= num; i += 1) {
    if (num % i === 0) {
      isZero += 1;
    }
  }
  const result = isZero === 2 ? 'yes' : 'no';
  return result;
};

const getNewRounds = () => {
  // [0] - вопрос, [1] - ответ;
  const rounds = [];
  for (let i = 0; i < 3; i += 1) {
    const items = [];
    const randomNumber = getRandomNumber(minNum, maxNum);
    items.push(`Question: ${randomNumber}`);
    items.push(String(isPrime(randomNumber)));
    rounds.push(items);
  }
  return rounds;
};

const brainPrime = () => {
  runPrime(rules, getNewRounds());
};

export default brainPrime;
