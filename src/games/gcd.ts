import run from '../index.js';
import { getRandomNumber } from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';
const minNumber = 1;
const maxNumber = 50;

const getGCD = (x: number, y: number): number => (x % y === 0 ? y : getGCD(y, x % y));

const getRound = (): [string, string] => {
  const number1 = getRandomNumber(minNumber, maxNumber);
  const number2 = getRandomNumber(minNumber, maxNumber);
  const question = `${number1} ${number2}`;
  const correctAnswer = String(getGCD(number1, number2));
  return [question, correctAnswer];
};

const runGcd = (): void => {
  run(description, getRound);
};

export default runGcd;
