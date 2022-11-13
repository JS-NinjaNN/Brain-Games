import readlineSync from 'readline-sync';

const getRandomNumber = (start, finish) => {
  const min = Math.ceil(start);
  const max = Math.floor(finish);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const playerQuestion = () => {
  const result = readlineSync.question('Your answer: ');
  return result;
};

const playerLose = (incorrect, correct, player) => `'${incorrect}' is wrong answer ;(. Correct answer was '${correct}'.\nLet's try again, ${player}!`;
const playerWin = (player) => `Congratulations, ${player}!`;

const gameOver = (correctAnswers, incorrect, correct, player) => {
  if (correctAnswers > 2) {
    console.log(playerWin(player));
  } else {
    console.log(playerLose(incorrect, correct, player));
  }
};

const playerGreetings = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  return name;
};

export {
  playerQuestion, getRandomNumber, playerLose, playerWin, gameOver, playerGreetings,
};
