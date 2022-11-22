import readlineSync from 'readline-sync';

// Илья, а действительно нам нужно сюда выносить roundsCount?
// Эта переменная ведь может быть объявлена циклом for
let roundsCount = 0;

const generateRounds = (fun) => {
  const rounds = [];
  for (let i = 0; i < 3; i += 1) {
    console.log(fun);
  }
  return rounds;
};

const run = (rules, rounds) => {
  let playerAnswer;
  let correctAnswer;
  console.log('Welcome to the Brain Games!');
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}`);
  console.log(rules);
  for (roundsCount; roundsCount < 3; roundsCount += 1) {
    const currentRound = rounds[roundsCount];
    const [question, answer] = currentRound;
    console.log(question);
    correctAnswer = answer;
    playerAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer !== playerAnswer) {
      return console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${username}!`);
    }
    console.log('Correct!');
  }
  return console.log(`Congratulations, ${username}!`);
};

export { generateRounds, run };
