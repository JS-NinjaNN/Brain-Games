#!/usr/bin/env node
import readlineSync from 'readline-sync';

const getRandomNumber = () => {
  const min = Math.ceil(1);
  const max = Math.floor(100);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const isEven = (num) => {
  const result = num % 2 === 0;
  return result;
};

const playerWelcome = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  return name;
};

const brainEven = () => {
  let correctAnswers = 0;
  const name = playerWelcome();
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  while (correctAnswers < 3) {
    const randomNumber = getRandomNumber();
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== 'yes' && answer !== 'no') {
      break;
    } else if ((isEven(randomNumber)) && (answer === 'yes')) {
      correctAnswers += 1;
      console.log('Correct!');
    } else if ((!isEven(randomNumber)) && answer === 'no') {
      correctAnswers += 1;
      console.log('Correct!');
    } else {
      break;
    }
  }
  if (correctAnswers === 3) {
    return console.log(`Congratulations, ${name}!`);
  }
  return console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`);
};
brainEven();
