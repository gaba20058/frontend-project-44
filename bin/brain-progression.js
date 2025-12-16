#!/usr/bin/env node

import {generateProgression, hideElement, generateProgressionParams} from "../src/helpers/helpers.js";
import runGame from "../src/runHelp.js";

const brainProgression=()=>{
    const {start,step,length,hiddenIndex}=generateProgressionParams();
    const progression=generateProgression(start,step,length);
    const hiddenProgression=hideElement(progression,hiddenIndex);
    const correctAnswer=String(progression[hiddenIndex]);

    return [hiddenProgression,correctAnswer];
};

const description='What number is missing in the progression?';
runGame(description,brainProgression);