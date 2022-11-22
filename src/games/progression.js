import run from '../index.js';
import { getRandomNumber, getRandomIndex } from '../utils.js';

const rules = 'What number is missing in the progression?';
const min = 1;
const max = 50;
const minProgressionLength = 4;
const maxProgressionLength = 9;

const getRandomProgression = () => {
  const progression = [];
  const progressionStart = getRandomNumber(min, max);
  const progressionStep = getRandomNumber(min, max);
  const progressionLength = getRandomNumber(minProgressionLength, maxProgressionLength);
  progression.push(progressionStart);
  for (let i = 0; i <= progressionLength; i += 1) {
    progression.push(progression[i] + progressionStep);
  }
  return progression;
};

const getHiddenSymbol = (progression) => progression[getRandomIndex(progression)];

const getNewRound = () => {
  const progression = getRandomProgression();
  const correctAnswer = String(getHiddenSymbol(progression));
  const question = (`Question: ${progression.join(' ').replace(correctAnswer, '..')}`);
  return [question, correctAnswer];
};

const runProgression = () => {
  const rounds = [];
  for (let i = 0; i < 3; i += 1) {
    rounds.push(getNewRound());
  }
  run(rules, rounds);
};

export default runProgression;
