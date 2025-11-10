import readlineSync from "readline-sync";

console.log('Answer "yes" if the number is even, otherwise answer "no".')
function guessNumber(){
let randomNum=Math.floor(Math.random()*100);
const answer = readlineSync.question(`Question: ${randomNum} \nYour answer: `);
let correctAnswer = randomNum % 2 ===0 ? "yes":"no";
if (answer.toLowerCase()===correctAnswer){
    console.log("Correct!");
} else {
    console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again!`
    );
};
}
guessNumber();
guessNumber();
guessNumber();