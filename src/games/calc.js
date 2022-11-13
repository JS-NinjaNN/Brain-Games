import * as fun from '../index.js';
import getRandomNumber from '../utils.js';

const getRandomOperator = () => {
  const operators = ['-', '+', '*'];
  const randomIndex = Math.floor(Math.random() * 3);
  const operator = operators[randomIndex];
  return operator;
};

const operation = (a, operator, b) => {
  const example = [a, operator, b];
  return example;
};

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

const rules = 'What is the result of the expression?';
let correctAnswer;
let playerAnswer;
let example;
let correctAnswers = 0;
let name;

const getNewRound = () => {
  example = operation(getRandomNumber(1, 50), getRandomOperator(), getRandomNumber(1, 50));
  correctAnswer = getCorrectAnswer(example);
  console.log(`Question: ${example[0]} ${example[1]} ${example[2]}`);
  playerAnswer = fun.playerQuestion();
};

const brainCalc = () => {
  name = fun.playerGreetings();
  console.log(rules);
  while (correctAnswers < 3) {
    getNewRound();
    if (+correctAnswer === +playerAnswer) {
      console.log('Correct!');
      correctAnswers += 1;
    } else {
      break;
    }
  }
  fun.gameOver(correctAnswers, playerAnswer, correctAnswer, name);
};

export default brainCalc;
