import run from '../index.js';
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

const getNewRound = () => {
  const firstRandomNum = getRandomNumber(min, max);
  const secondRandomNum = getRandomNumber(min, max);
  const example = operation(firstRandomNum, getRandomOperator(), secondRandomNum);
  const question = (`Question: ${example[0]} ${example[1]} ${example[2]}`);
  const correctAnswer = (String(calculate(example)));
  return [question, correctAnswer];
};

const runCalc = () => {
  const rounds = [];
  for (let i = 0; i < 3; i += 1) {
    rounds.push(getNewRound());
  }
  run(rules, rounds);
};

export default runCalc;
