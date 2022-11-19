const getRandomNumber = (start, finish) => Math.floor(Math.random() * (finish - start + 1)) + start;

const getRandomIndex = (array) => getRandomNumber(0, (array.length - 1));

export { getRandomNumber, getRandomIndex };
