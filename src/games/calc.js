import { generateRounds, run } from '../index.js';
import { getRandomNumber, getRandomIndex } from '../utils.js';

const rules = 'What is the result of the expression?';
const operators = ['-', '+', '*'];
const min = 1;
const max = 50;

const calculate = (operator, x, y) => {
  switch (operator) {
    case '+':
      return x + y;
    case '-':
      return x - y;
    case '*':
      return x * y;
    default:
      throw new Error(`Unknown operator: '${operator}'!`);
  }
};

const getNewRound = () => {
  const firstNum = getRandomNumber(min, max);
  const secondNum = getRandomNumber(min, max);
  const operator = operators[getRandomIndex(operators)];
  const question = (`Question: ${firstNum} ${operator} ${secondNum}`);
  const correctAnswer = (String(calculate(operator, firstNum, secondNum)));
  return [question, correctAnswer];
};

const runCalc = () => {
  const rounds = generateRounds(getNewRound());
  run(rules, rounds);
};

export default runCalc;
