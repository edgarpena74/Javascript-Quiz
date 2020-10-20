//i might need to add prevent default behavior.
let question = document.querySelector("#question");
let answerSection = document.querySelector("#answerSection");
let submitA = document.querySelector("#submitA");
let answerA = document.querySelector("#answerA");
let submitB = document.querySelector("#submitB");
let answerB = document.querySelector("#answerB");
let submitC = document.querySelector("#submitC");
let answerC = document.querySelector("#answerC");
let submitD = document.querySelector("#submitD");
let answerD = document.querySelector("#answerD");
let next = document.querySelector("#next");


let begin = confirm("Click OK to begin the quiz")
console.log(begin)

let funkArray = [
    {
        question : "do you want the funk?",
        answers : ["yeah", "funky", "funky funk", "we want the funk!"],
        correctAnswer : "a"

    },

    {
        question : "do you want the funk?***",
        answers : ["yeah**", "funky**", "funky funk**", "we want the funk!**"],
        correctAnswer : "b"
    },

    {
        question : "do you want the funk?//",
        answers : ["yeah//", "funky//", "funky funk//", "we want the funk!//"],
        correctAnswer : "c"
    }

]

let counter = 0;

funkArray[counter];





console.log(question)
console.log(answerA)
console.log(answerB)
console.log(answerC)
console.log(answerD)













