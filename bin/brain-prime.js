#!/usr/bin/env node

import { generateNumber, isPrime } from "../src/helpers/helpers.js";
import runGame from "../src/runHelp.js";

const brainPrime=()=>{
    const num=generateNumber(1,100);
    const correctAnswer=isPrime(num) ? "yes" : "no";
    const question = `${num}`;

    return [question,correctAnswer];
}

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
runGame(description,brainPrime);