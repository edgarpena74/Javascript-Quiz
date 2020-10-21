//i might need to add prevent default behavior.
let theQuestion = document.querySelector("#question");
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
        question : "do you want the funk? huuhhh?",
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
let nextQuestion = function(){
    console.log(funkArray[counter])
  
    //grab the element with id "question", change its text to the "counter"-th question text.
    
    theQuestion.textContent = funkArray[counter].question;
    answerA.textContent = funkArray[counter].answers[0];
    answerB.textContent = funkArray[counter].answers[1];
    answerC.textContent = funkArray[counter].answers[2];
    answerD.textContent = funkArray[counter].answers[3];

    //hide next button until answerCLick function is executed
    next.style.visibility = "hidden"

    console.log(theQuestion + " " + "WOAH IT WORKS!!!!!!!")
}

let nextButton = function click() {
   
    counter++;
    console.log(counter)
    nextQuestion();
}

nextQuestion();

let answersArray = []
let answerClick = function(){
  //you'll notice that you can grab the clicked element's VALUE. Good job on setting up values in HTML!
  console.log("made it here");
  console.log("WHY U NO WERK?????");
  

  //this line grabs the next button and makes it visible
  next.style.visibility = "visible";

  //change the answersArray at index "counter" to the selected answer choice (a-d)
  //   answersArray[counter] = value
    var value  = this.getAttribute("data-answer");
    answerA.setAttribute("data-answer", funkArray[counter].answers[0]);
    answerB.setAttribute("data-answer", funkArray[counter].answers[1]);
    answerC.setAttribute("data-answer", funkArray[counter].answers[2]);
    answerD.setAttribute("data-answer", funkArray[counter].answers[3]);
    
  console.log(value);
}
submitA.addEventListener("click", answerClick)
submitB.addEventListener("click", answerClick)
submitC.addEventListener("click", answerClick)
submitD.addEventListener("click", answerClick)

console.log(answerClick)
console.log(answersArray)

















