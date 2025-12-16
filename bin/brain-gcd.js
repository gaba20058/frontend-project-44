#!/usr/bin/env node

import {generateNumber, findGCD} from "../src/helpers/helpers.js";
import runGame from '../src/runHelp.js';

const brainGCD=()=>{
    const a=generateNumber();
    const b=generateNumber();
    const question=`${a} ${b}`;
    const correctAnswer=findGCD(a,b);

    return [question,correctAnswer];
};

const description = "Find the greatest common divisor of given numbers.";
runGame(description,brainGCD);
