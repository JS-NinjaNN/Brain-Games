import run from '../index.js';
import { getRandomNumber } from '../utils.js';
const description = 'Answer "yes" if the number is even, otherwise answer "no"';
const minNumber = 1;
const maxNumber = 100;
const isEven = (num) => num % 2 === 0;
const getRound = () => {
    const number = getRandomNumber(minNumber, maxNumber);
    const question = String(number);
    const correctAnswer = isEven(number) ? 'yes' : 'no';
    return [question, correctAnswer];
};
const runEven = () => {
    run(description, getRound);
};
export default runEven;
