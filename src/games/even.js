import runEven from '../index.js';
import { getRandomNumber } from '../utils.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no"';
const min = 1;
const max = 100;

const isEven = (num) => {
  const result = (num % 2 === 0) ? 'yes' : 'no';
  return result;
};

const getNewRounds = () => {
  // [0] - вопрос, [1] - ответ;
  const rounds = [];
  for (let i = 0; i < 3; i += 1) {
    const items = [];
    const randomNumber = getRandomNumber(min, max);
    items.push(`Question: ${randomNumber}`);
    items.push(isEven(randomNumber));
    rounds.push(items);
  }
  return rounds;
};

const brainEven = () => {
  runEven(rules, getNewRounds());
};

export default brainEven;
