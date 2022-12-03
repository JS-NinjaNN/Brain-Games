import run from '../index.js';
import { getRandomNumber, getRandomIndex } from '../utils.js';

const description = 'What number is missing in the progression?';
const minStart = 1;
const maxStart = 50;
const minStep = 1;
const maxStep = 50;
const minLength = 4;
const maxLength = 9;

const buildProgression = (start, step, length) => {
  const progression = [];
  progression.push(start);
  for (let i = 0; i <= length; i += 1) {
    progression.push(progression[i] + step);
  }
  return progression;
};

const getRound = () => {
  const start = getRandomNumber(minStart, maxStart);
  const step = getRandomNumber(minStep, maxStep);
  const length = getRandomNumber(minLength, maxLength);
  const progression = buildProgression(start, step, length);
  const index = getRandomIndex(progression);
  const correctAnswer = String(progression.splice(index, 1, '..'));
  const question = progression.join(' ');
  return [question, correctAnswer];
};

const runProgression = () => {
  run(description, getRound);
};

export default runProgression;
