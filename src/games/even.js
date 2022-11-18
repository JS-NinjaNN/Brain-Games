import run from '../index.js';
import getRandomNumber from '../utils.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEven = (num) => {
  const result = (num % 2 === 0) ? 'yes' : 'no';
  return result;
};

const getNewRounds = () => {
  // [0] - вопрос, [1] - ответ;
  const rounds = [];
  for (let i = 0; i < 3; i += 1) {
    const items = [];
    const randomNumber = getRandomNumber(1, 100);
    items.push(`Question: ${randomNumber}`);
    items.push(isEven(randomNumber));
    rounds.push(items);
  }
  console.log(rounds);
  return rounds;
};

const brainEven = () => {
  run(rules, getNewRounds());
};

export default brainEven;
