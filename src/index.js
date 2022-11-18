import readlineSync from 'readline-sync';

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

const run = (rules, rounds) => {
  let correctAnswers = 0;
  let playerAnswer;
  let correctAnswer;
  let roundsCount = 0;
  const username = playerGreetings();
  console.log(rules);
  while (correctAnswers < 3) {
    // [0] - вопрос, [1] - правильный ответ;
    const currentRound = rounds[roundsCount];
    const [question, answer] = currentRound;
    console.log(question);
    playerAnswer = playerQuestion();
    correctAnswer = answer;
    if (+correctAnswer === +playerAnswer) {
      console.log('Correct!');
      correctAnswers += 1;
    } else {
      return gameOver(correctAnswers, playerAnswer, answer, username);
    }
    roundsCount += 1;
  }
  return gameOver(correctAnswers, playerAnswer, correctAnswer, username);
};

export default run;
