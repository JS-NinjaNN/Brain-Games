import runCalc from '../index.js';
import getRandomNumber from '../utils.js';

const rules = 'What is the result of the expression?';
const operators = ['-', '+', '*'];
const minNum = 1;
const maxNum = 50;

const getRandomOperator = () => {
  const randomIndex = Math.floor(Math.random() * 3);
  const operator = operators[randomIndex];
  return operator;
};

const operation = (a, operator, b) => [a, operator, b];

const getCorrectAnswer = (example) => {
  let correctAnswer;
  switch (example[1]) {
    case '+':
      correctAnswer = example[0] + example[2];
      break;
    case '-':
      correctAnswer = example[0] - example[2];
      break;
    default:
      correctAnswer = example[0] * example[2];
  }
  return correctAnswer;
};

const getNewRounds = () => {
  // [0] - вопрос, [1] - ответ;
  const rounds = [];
  for (let i = 0; i < 3; i += 1) {
    const items = [];
    const firstRandomNum = getRandomNumber(minNum, maxNum);
    const secondRandoNum = getRandomNumber(minNum, maxNum);
    const example = operation(firstRandomNum, getRandomOperator(), secondRandoNum);
    items.push(`Question: ${example[0]} ${example[1]} ${example[2]}`);
    items.push(String(getCorrectAnswer(example)));
    rounds.push(items);
  }
  return rounds;
};

const brainCalc = () => {
  runCalc(rules, getNewRounds());
};

export default brainCalc;
