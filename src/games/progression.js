import * as fun from '../index.js';
import getRandomNumber from '../utils.js';

const getRandomProgression = () => {
  const progression = [];
  const progressionStart = getRandomNumber(1, 50);
  const progressionStep = getRandomNumber(1, 50);
  const progressionLength = getRandomNumber(4, 9);
  progression.push(progressionStart);
  for (let i = 0; i <= progressionLength; i += 1) {
    progression.push(progression[i] + progressionStep);
  }
  return progression;
};

const getHiddenSymbol = (progression) => {
  const progressionLength = progression.length - 1;
  const HiddenIndex = getRandomNumber(0, progressionLength);
  const hiddenSymbol = progression[HiddenIndex];
  return hiddenSymbol;
};

const rules = 'What number is missing in the progression?';
let correctAnswer;
let playerAnswer;
let correctAnswers = 0;
let name;
let progression;

const getNewRound = () => {
  progression = getRandomProgression();
  correctAnswer = getHiddenSymbol(progression);
  console.log(`Question: ${progression.join(' ').replace(correctAnswer, '..')}`);
  playerAnswer = fun.playerQuestion();
};

const brainProgression = () => {
  name = fun.playerGreetings();
  console.log(rules);
  while (correctAnswers < 3) {
    getNewRound();
    if (+correctAnswer === +playerAnswer) {
      console.log('Correct!');
      correctAnswers += 1;
    } else {
      break;
    }
  }
  fun.gameOver(correctAnswers, playerAnswer, correctAnswer, name);
};

export default brainProgression;
