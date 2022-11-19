import runProgression from '../index.js';
import { getRandomNumber, getRandomIndex } from '../utils.js';

const rules = 'What number is missing in the progression?';
const minNum = 1;
const maxNum = 50;
const minProgressionLength = 4;
const maxProgressionLength = 9;

const getRandomProgression = () => {
  const progression = [];
  const progressionStart = getRandomNumber(minNum, maxNum);
  const progressionStep = getRandomNumber(minNum, maxNum);
  const progressionLength = getRandomNumber(minProgressionLength, maxProgressionLength);
  progression.push(progressionStart);
  for (let i = 0; i <= progressionLength; i += 1) {
    progression.push(progression[i] + progressionStep);
  }
  return progression;
};

const getHiddenSymbol = (progression) => {
  const hiddenSymbol = progression[getRandomIndex(progression)];
  return hiddenSymbol;
};

const getNewRounds = () => {
  // [0] - вопрос, [1] - ответ;
  const rounds = [];
  for (let i = 0; i < 3; i += 1) {
    const items = [];
    const progression = getRandomProgression();
    const correctAnswer = getHiddenSymbol(progression);
    items.push(`Question: ${progression.join(' ').replace(correctAnswer, '..')}`);
    items.push(String(correctAnswer));
    rounds.push(items);
  }
  return rounds;
};

const brainProgression = () => {
  runProgression(rules, getNewRounds());
};

export default brainProgression;
