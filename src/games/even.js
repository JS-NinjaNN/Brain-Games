import * as fun from '../index.js';

const isEven = (num) => {
  const even = (num % 2 === 0) ? 'yes' : 'no';
  return even;
};

const rules = 'Answer "yes" if the number is even, otherwise answer "no"';
let correctAnswers = 0;
let name;
let randomNumber;
let correctAnswer;
let playerAnswer;

const brainEven = () => {
  name = fun.playerGreetings();
  console.log(rules);
  while (correctAnswers < 3) {
    randomNumber = fun.getRandomNumber(1, 100);
    console.log(`Question: ${randomNumber}`);
    correctAnswer = isEven(randomNumber);
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

export default brainEven;
