const getRandomNumber = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomIndex = (data: Array<string | number>) => Math.floor(Math.random() * data.length);

export { getRandomNumber, getRandomIndex };
