#!/usr/bin/env node

import readlineSync from 'readline-sync';

const { log } = console;
const { question: ask } = readlineSync;

const isEven = (number) => number % 2 === 0;
const getRandomInteger = (limit) => Math.floor(Math.random() * limit) + 1;

log('Welcome to the Brain Games!');
const userName = ask('May I have your name? ');
log(`Hello, ${userName}`);
log('Answer "yes" if the number is even, otherwise answer "no".');

const rounds = 3;
const numberLimit = 100;
let userWin = true;

for (let i = 0; i < rounds; i += 1) {
  const number = getRandomInteger(numberLimit);
  const correctAnswer = isEven(number) ? 'yes' : 'no';

  log(`Question: ${number}`);
  const userAnswer = ask('Your answer: ');
  if (userAnswer === correctAnswer) {
    log('Correct!');
  } else {
    log(`${userAnswer} is a wrong answer ;(. Correct answer was ${correctAnswer}`);
    log(`Let's try again, ${userName}!`);
    userWin = false;
    break;
  }
}

if (userWin) {
  console.log(`Congratulations, ${userName}!`);
}
