import runGcd from '../index.js';
import getRandomNumber from '../utils.js';

const rules = 'Find the greatest common divisor of given numbers.';
const minNum = 1;
const maxNum = 50;

const getGCD = (a, b) => {
  let answer;
  let i = a > b ? a : b;
  while (i > 0) {
    if (a % i === 0 && b % i === 0) {
      answer = i;
      break;
    }
    i -= 1;
  }
  return answer;
};

const getNewRounds = () => {
  // [0] - вопрос, [1] - ответ;
  const rounds = [];
  for (let i = 0; i < 3; i += 1) {
    const items = [];
    const givenNumberOne = getRandomNumber(minNum, maxNum);
    const givenNumberTwo = getRandomNumber(minNum, maxNum);
    items.push(`Question: ${givenNumberOne} ${givenNumberTwo}`);
    items.push(String(getGCD(givenNumberOne, givenNumberTwo)));
    rounds.push(items);
  }
  return rounds;
};

const brainGcd = () => {
  runGcd(rules, getNewRounds());
};

export default brainGcd;
