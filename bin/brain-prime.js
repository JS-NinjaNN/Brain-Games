#!/usr/bin/env node
import * as fun from '../src/index.js';
import playerWelcome from '../src/cli.js';

const isPrime = (num) => {
  let isZero = 0;
  for (let i = 1; i <= num; i += 1) {
    if (num % i === 0) {
      isZero += 1;
    }
  }
  const result = isZero === 2 ? 'yes' : 'no';
  return result;
};

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
let correctAnswers = 0;
let name;
let randomNumber;
let correctAnswer;
let playerAnswer;

const brainPrime = () => {
  name = playerWelcome();
  console.log(rules);
  while (correctAnswers < 3) {
    randomNumber = fun.getRandomNumber(2, 100);
    console.log(`Question: ${randomNumber}`);
    correctAnswer = isPrime(randomNumber);
    playerAnswer = fun.playerQuestion();
    if (correctAnswer === playerAnswer) {
      console.log('Correct!');
      correctAnswers += 1;
    } else {
      break;
    }
  }
  fun.gameOver(correctAnswers, playerAnswer, correctAnswer, name);
};
brainPrime();
