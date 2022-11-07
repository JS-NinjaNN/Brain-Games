#!/usr/bin/env node
import { getRandomNumber, playerWelcome, playerQuestion } from '../src/index.js';

const isEven = (num) => {
  const even = (num % 2 === 0) ? 'yes' : 'no';
  return even;
};

const brainEven = () => {
  let correctAnswers = 0;
  let playerLose = '';
  const rules = 'Answer "yes" if the number is even, otherwise answer "no"';
  const name = playerWelcome();
  const playerWin = `Congratulations, ${name}!`;
  console.log(rules);
  while (correctAnswers < 3) {
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    const correctAnswer = isEven(randomNumber);
    const playerAnswer = playerQuestion();
    if (correctAnswer === playerAnswer) {
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

brainEven();
