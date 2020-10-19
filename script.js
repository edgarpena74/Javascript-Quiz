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



function nu1 () {
    question.textContent = "do you want the funk?";
    answerA.textContent = "yeah";
    answerB.textContent = "funky";
    answerC.textContent = " funky funk";
    answerD.textContent = "we want the funk!";
}
console.log(nu1)

function nu2 () {
    question.textContent = "do you want the funk?";
    answerA.textContent = " yeah";
    answerB.textContent = "funky";
    answerC.textContent = " funky funk";
    answerD.textContent = "we want the funk!";
}
console.log(nu2)

function nu3 () {
    question.textContent = "do you want the funk?";
    answerA.textContent = "yeah";
    answerB.textContent = "funky";
    answerC.textContent = " funky funk";
    answerD.textContent = "we want the funk!";
}
console.log(nu3)



let correctAnswers = ["a","b","c"]
let userAnswers = ["a","b","c"]
console.log(userAnswers + correctAnswers)

let funkArray = [nu1,nu2,nu3];

console.log(funkArray + " " + "woah it wokred")


