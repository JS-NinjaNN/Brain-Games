#!/usr/bin/env node
import * as fun from '../src/index.js';
import playerWelcome from '../src/cli.js';

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
    example = fun.operation(fun.getRandomNumber(), fun.getRandomOperator(), fun.getRandomNumber());
    correctAnswer = fun.getCorrectAnswer(example);
    console.log(`Question: ${example[0]}${example[1]}${example[2]}`);
    playerAnswer = fun.playerQuestion();
    if (+correctAnswer === +playerAnswer) {
      console.log('Correct!');
      correctAnswers += 1;
    } else {
      break;
    }
  }
  console.log(fun.gameOver(correctAnswers, playerAnswer, correctAnswer, name));
};

brainCalc();
