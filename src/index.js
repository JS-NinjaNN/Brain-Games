import readlineSync from 'readline-sync';

const playerQuestion = () => {
  const result = readlineSync.question('Your answer: ');
  return result;
};

const run = (rules, rounds) => {
  let playerAnswer;
  let correctAnswer;
  console.log('Welcome to the Brain Games!');
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}`);
  console.log(rules);
  for (let i = 0; i < 3; i += 1) {
    const currentRound = rounds[i];
    const [question, answer] = currentRound;
    console.log(question);
    correctAnswer = answer;
    playerAnswer = playerQuestion();
    if (correctAnswer !== playerAnswer) {
      return console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${username}!`);
    }
    console.log('Correct!');
  }
  return console.log(`Congratulations, ${username}!`);
};

export default run;
