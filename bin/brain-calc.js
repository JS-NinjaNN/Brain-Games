#!/usr/bin/env node
import {
  getRandomNumber, getRandomOperator, playerWelcome, playerQuestion,
} from '../src/index.js';

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

const brainCalc = () => {
  let correctAnswers = 0;
  let playerLose = '';
  const rules = 'What is the result of the expression?';
  const name = playerWelcome();
  const playerWin = `Congratulations, ${name}!`;
  console.log(rules);
  while (correctAnswers < 3) {
    const example = operation(getRandomNumber(), getRandomOperator(), getRandomNumber());
    const correctAnswer = getCorrectAnswer(example);
    console.log(`Question: ${example[0]}${example[1]}${example[2]}`);
    const playerAnswer = playerQuestion();
    if (+correctAnswer === +playerAnswer) {
      console.log('Correct!');
      correctAnswers += 1;
    } else {
      playerLose = `'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`;
      break;
    }
  }
  if (correctAnswers >= 3) {
    console.log(playerWin);
  } else {
    console.log(playerLose);
  }
};

brainCalc();
