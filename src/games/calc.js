import runCalc from '../index.js';
import { getRandomNumber, getRandomIndex } from '../utils.js';

const rules = 'What is the result of the expression?';
const operators = ['-', '+', '*'];
const min = 1;
const max = 50;

const getRandomOperator = () => operators[getRandomIndex(operators)];

const operation = (a, operator, b) => [a, operator, b];

const calculate = (example) => {
  const [x, operator, y] = example;
  switch (operator) {
    case '+':
      return x + y;
    case '-':
      return x - y;
    case '*':
      return x * y;
    default:
      throw new Error(`Unknown order state: '${example}'!`);
  }
};

const getNewRounds = () => {
  // [0] - вопрос, [1] - ответ;
  const rounds = [];
  for (let i = 0; i < 3; i += 1) {
    const items = [];
    const firstRandomNum = getRandomNumber(min, max);
    const secondRandomNum = getRandomNumber(min, max);
    const example = operation(firstRandomNum, getRandomOperator(), secondRandomNum);
    items.push(`Question: ${example[0]} ${example[1]} ${example[2]}`);
    items.push(String(calculate(example)));
    rounds.push(items);
  }
  return rounds;
};

const brainCalc = () => {
  runCalc(rules, getNewRounds());
};

export default brainCalc;
