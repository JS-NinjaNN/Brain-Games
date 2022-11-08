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

const playerLose = (incorrect, correct, player) => console.log(`'${incorrect}' is wrong answer ;(. Correct answer was '${correct}'.\nLet's try again, ${player}!`);
const playerWin = (player) => console.log(`Congratulations, ${player}!`);

const gameOver = (correctAnswers, incorrect, correct, player) => {
  let result = '';
  if (correctAnswers > 2) {
    result = playerWin(player);
  } else {
    result = playerLose(incorrect, correct, player);
  }
  return result;
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

const operation = (a, operator, b) => {
  const example = [a, operator, b];
  return example;
};

const isEven = (num) => {
  const even = (num % 2 === 0) ? 'yes' : 'no';
  return even;
};

export {
  playerQuestion, getRandomNumber, getRandomOperator,
  playerWelcome, playerLose, playerWin, gameOver, getCorrectAnswer, operation, isEven,
};
