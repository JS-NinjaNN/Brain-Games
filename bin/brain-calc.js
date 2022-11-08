#!/usr/bin/env node
import * as fun from '../src/index.js';
import playerWelcome from '../src/cli.js';

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

const brainCalc = () => {
  name = playerWelcome();
  console.log(rules);
  while (correctAnswers < 3) {
    example = operation(fun.getRandomNumber(), getRandomOperator(), fun.getRandomNumber());
    correctAnswer = getCorrectAnswer(example);
    console.log(`Question: ${example[0]}${example[1]}${example[2]}`);
    playerAnswer = fun.playerQuestion();
    if (+correctAnswer === +playerAnswer) {
      console.log('Correct!');
      correctAnswers += 1;
    } else {
      break;
    }
  }
  fun.gameOver(correctAnswers, playerAnswer, correctAnswer, name);
};

brainCalc();
