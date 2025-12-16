#!/usr/bin/env node

import { isPrime, generateNumber } from '../src/helpers/helpers.js'
import runGame from '../src/runHelp.js'

const brainPrime = () => {
  const num = generateNumber()
  const correctAnswer = isPrime(num) ? 'yes' : 'no'
  const question = String(num)

  return [question, correctAnswer]
}

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".'
runGame(description, brainPrime)
