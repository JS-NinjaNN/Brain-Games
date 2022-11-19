import run from '../index.js';
import getRandomNumber from '../utils.js';

const rules = 'What number is missing in the progression?';

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
  run(rules, getNewRounds());
};

export default brainProgression;
