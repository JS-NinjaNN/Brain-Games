#!/usr/bin/env node
import * as fun from '../src/index.js';
import playerWelcome from '../src/cli.js';

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

const rules = 'Find the greatest common divisor of given numbers.';
let correctAnswer;
let playerAnswer;
let givenNumberOne;
let givenNumberTwo;
let correctAnswers = 0;
let name;

const brainGcd = () => {
  name = playerWelcome();
  console.log(rules);
  while (correctAnswers < 3) {
    givenNumberOne = fun.getRandomNumber(1, 50);
    givenNumberTwo = fun.getRandomNumber(1, 50);
    console.log(`Question: ${givenNumberOne} ${givenNumberTwo}`);
    correctAnswer = getGCD(givenNumberOne, givenNumberTwo);
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

brainGcd();
