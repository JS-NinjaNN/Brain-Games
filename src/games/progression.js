import run from '../index.js';
import { getRandomNumber, getRandomIndex } from '../utils.js';

const description = 'What number is missing in the progression?';
const minStart = 1;
const maxStart = 50;
const minStep = 1;
const maxStep = 50;
const minLength = 4;
const maxLength = 9;

const getProgression = (progressionStart, progressionStep, progressionLength) => {
  const progression = [];
  progression.push(progressionStart);
  for (let i = 0; i <= progressionLength; i += 1) {
    progression.push(progression[i] + progressionStep);
  }
  return progression;
};

const getRound = () => {
  const progressionStart = getRandomNumber(minStart, maxStart);
  const progressionStep = getRandomNumber(minStep, maxStep);
  const progressionLength = getRandomNumber(minLength, maxLength);
  const progression = getProgression(progressionStart, progressionStep, progressionLength);
  const index = getRandomIndex(progression);
  const correctAnswer = String(progression[index]);
  progression.splice(index, 1, '..');
  const question = progression.join(' ');
  return [question, correctAnswer];
};

const runProgression = () => {
  run(description, getRound);
};

export default runProgression;
