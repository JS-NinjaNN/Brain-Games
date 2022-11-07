import readlineSync from 'readline-sync';

const getRandomNumber = () => {
  const min = Math.ceil(1);
  const max = Math.floor(25);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomOperator = () => {
  const operators = ['-', '+', '*'];
  const randomIndex = Math.floor(Math.random() * 3);
  const operator = operators[randomIndex];
  return operator;
};

const playerWelcome = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  return name;
};

const playerQuestion = () => {
  const result = readlineSync.question('Your answer: ');
  return result;
};

export {
  playerQuestion, getRandomNumber, getRandomOperator, playerWelcome,
};
