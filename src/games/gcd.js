import runGcd from '../index.js';
import getRandomNumber from '../utils.js';

const rules = 'Find the greatest common divisor of given numbers.';

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
    const givenNumberOne = getRandomNumber(1, 50);
    const givenNumberTwo = getRandomNumber(1, 50);
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
