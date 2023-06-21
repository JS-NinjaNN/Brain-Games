import run from '../index.js';
import { getRandomNumber, getRandomIndex } from '../utils.js';
var Operator;
(function (Operator) {
    Operator["Addition"] = "+";
    Operator["Subtraction"] = "-";
    Operator["Multiplication"] = "*";
})(Operator || (Operator = {}));
const description = 'What is the result of the expression?';
const operators = [Operator.Addition, Operator.Subtraction, Operator.Multiplication];
const minNumber = 1;
const maxNumber = 50;
const calculate = (operator, x, y) => {
    switch (operator) {
        case '+':
            return x + y;
        case '-':
            return x - y;
        case '*':
            return x * y;
        default:
            throw new Error(`Unknown operator: '${operator}'!`);
    }
};
const getRound = () => {
    const number1 = getRandomNumber(minNumber, maxNumber);
    const number2 = getRandomNumber(minNumber, maxNumber);
    const operator = operators[getRandomIndex(operators)];
    const question = `${number1} ${operator} ${number2}`;
    const correctAnswer = String(calculate(operator, number1, number2));
    return [question, correctAnswer];
};
const runCalc = () => {
    run(description, getRound);
};
export default runCalc;
