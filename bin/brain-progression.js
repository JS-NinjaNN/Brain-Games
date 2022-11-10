#!/usr/bin/env node
import * as fun from '../src/index.js';
import playerWelcome from '../src/cli.js';

const getRandomProgression = () => {
  const progression = [];
  const progressionStart = fun.getRandomNumber(1, 50);
  const progressionStep = fun.getRandomNumber(1, 50);
  const progressionLength = fun.getRandomNumber(4, 9);
  progression.push(progressionStart);
  for (let i = 0; i <= progressionLength; i += 1) {
    progression.push(progression[i] + progressionStep);
  }
  return progression;
};

const getHiddenSymbol = (progression) => {
  const progressionLength = progression.length - 1;
  const HiddenIndex = fun.getRandomNumber(0, progressionLength);
  const hiddenSymbol = progression[HiddenIndex];
  return hiddenSymbol;
};

const rules = 'What number is missing in the progression?';
let correctAnswer;
let playerAnswer;
let correctAnswers = 0;
let name;
let progression;

const brainProgression = () => {
  name = playerWelcome();
  console.log(rules);
  while (correctAnswers < 3) {
    progression = getRandomProgression();
    correctAnswer = getHiddenSymbol(progression);
    console.log(`Question: ${progression.join(' ').replace(correctAnswer, '..')}`);
    playerAnswer = fun.playerQuestion();
    if (+correctAnswer === +playerAnswer) {
      console.log('Correct!');
      correctAnswers += 1;
    } else {
      break;
    }
  }
  fun.gameOver(correctAnswers, playerAnswer, correctAnswer, name);
};
brainProgression();
