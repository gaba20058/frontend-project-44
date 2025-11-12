#!/usr/bin/env node
import { isEven, generateNumber } from '../src/helpers/helpers.js'
import runGame from '../src/runHelp.js'

const brainEven = () => {
  const num = generateNumber();
  const correctAnswer = (isEven(num) ? 'yes' : 'no');
  const question = `${num}`;
  return [question, correctAnswer];
}

const description = `Answer "yes" if the number is even, otherwise answer "no".`;
runGame(description, brainEven);