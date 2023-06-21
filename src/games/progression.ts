import run from '../index.js';
import { getRandomNumber, getRandomIndex } from '../utils.js';

const description = 'What number is missing in the progression?';
const minStart = 1;
const maxStart = 50;
const minStep = 1;
const maxStep = 50;
const minLength = 5;
const maxLength = 10;

const buildProgression = (start: number, step: number, length: number): number[] => {
  const progression: number[] = [];
  for (let i = 0; i < length; i += 1) {
    const currentElement = progression.length === 0 ? start : (progression[i - 1] + step);
    progression.push(currentElement);
  }
  return progression;
};

const getRound = (): [string, string] => {
  const start = getRandomNumber(minStart, maxStart);
  const step = getRandomNumber(minStep, maxStep);
  const length = getRandomNumber(minLength, maxLength);
  const progression: Array<string | number> = buildProgression(start, step, length);
  const index = getRandomIndex(progression);
  const correctAnswer = String(progression.splice(index, 1, '..'));
  const question = progression.join(' ');
  return [question, correctAnswer];
};

const runProgression = (): void => {
  run(description, getRound);
};

export default runProgression;
