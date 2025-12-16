#!/usr/bin/env node

import { findGCD, generateNumber } from '../src/helpers/helpers.js'
import runGame from '../src/runHelp.js'

const brainGcd = () => {
  const num1 = generateNumber()
  const num2 = generateNumber()
  const correctAnswer = String(findGCD(num1, num2))
  const question = `${num1} ${num2}`

  return [question, correctAnswer]
}

const description = 'Find the greatest common divisor of given numbers.'
runGame(description, brainGcd)
