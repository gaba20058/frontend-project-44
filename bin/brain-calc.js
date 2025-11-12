#!/usr/bin/env node
import { mathOperator, calcNums, generateNumber } from "../src/helpers/helpers.js";
import runGame from "../src/runHelp.js";

const brainCalc = () => {
    const a=generateNumber();
    const b=generateNumber();
    const operator=mathOperator();
    const question = `${a} ${operator} ${b}`;
    const correctAnswer = (calcNums(a, b, operator));
    return [question,correctAnswer];
}

const description = 'What is the result of the expression?';
runGame(description, brainCalc);