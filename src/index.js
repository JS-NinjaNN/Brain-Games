import readlineSync from 'readline-sync';

const roundsCount = 3;

const run = (description, getRound) => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}`);
  console.log(description);
  for (let i = 0; i < roundsCount; i += 1) {
    const [question, correctAnswer] = getRound();
    console.log(`Question: ${question}`);
    const playerAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer !== playerAnswer) {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${playerName}!`);
};

export default run;
