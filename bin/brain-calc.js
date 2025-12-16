#!/usr/bin/env node

import { calcNums, mathOperator, generateNumber } from '../src/helpers/helpers.js'
import runGame from '../src/runHelp.js'

const brainCalc = () => {
  const num1 = generateNumber()
  const num2 = generateNumber()
  const operator = mathOperator()
  const correctAnswer = String(calcNums(num1, num2, operator))
  const question = `${num1} ${operator} ${num2}`

  return [question, correctAnswer]
}

const description = 'What is the result of the expression?'
runGame(description, brainCalc)
