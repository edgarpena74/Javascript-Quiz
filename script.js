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
let rowQ = document.querySelector("#rowQ");
let done = document.querySelector("#done");
let userScore = document.querySelector("#userScore");
let userTxt = document.querySelector("userTxt");
let time = 60;
let timeFunc; 
let startBtn = document.querySelector("#startBtn")


// let begin = onclick("Click OK to begin the quiz")
// console.log(begin)





let funkArray = [
    {
        question : "do you want the funk? huuhhh?",
        answers : ["yeah", "funky", "funky funk", "we want the funk!"],
        correctAnswer : "a"

    },

    {
        question : "do you want the funk?***",
        answers : ["yeah**", "funky**", "funky funk**", "we want the funk!**"],
        correctAnswer : "a"
    },

    {
        question : "do you want the funk?//",
        answers : ["yeah//", "funky//", "funky funk//", "we want the funk!//"],
        correctAnswer : "a"
    }

]

let counter = 0;
let answerChosen = ""
let answer = "a";
let score = 0;
let display = document.querySelector('#time');
let intro = document.querySelector("#intro");
let quizContainer = document.querySelector("#quizContainer");

let begin = confirm("Click OK to begin the quiz")
console.log(begin)




// const startQuiz = function () {
//     display.textContent = time;
//     timeFunc = setInterval(startTimer, 1000);
//     intro.classList.add("hidden");
//     quizContainer.classList.remove("hidden");
//     nextQuestion();
//     next.style.visibility = "hidden";





// };

function startTimer() {
    time--;
    display.textContent = time
    if (time <= 0){
        time = 0;
        display.textContent = time;
        gameOver();
    }
    


}

let answerClick = function(){
    
    //you'll notice that you can grab the clicked element's VALUE. Good job on setting up values in HTML!
    console.log(this + "    this")
    let value  = this.getAttribute("data-value"); 
    let endScore = 3;
  
    //this line grabs the next button and makes it visible
    next.style.visibility = "visible";
    
    
    
  


    answerChosen = value;

    console.log(answerChosen + "   this is the answer chosen")

    // if (answerChosen === funkArray[counter].correctAnswer) {
       
    //     this.style.background = "#55FF3A"
    //     score++;
    //     // alert("GOOD JOB!!")
    // } else {
    //     this.style.background = "red";
    //     time -= 10;
    //     display.textContent = time;

    // } 

    if (answerChosen === "a") {
       
        submitA.style.background = "#55FF3A"
        score++;
        // alert("GOOD JOB!!")
    } else if (answerChosen == "b") {
        submitB.style.background = "red";
        time -= 10;
    }else if (answerChosen == "c") {
        submitC.style.background = "red";
        time -= 10;
    }else if (answerChosen == "d") {
        submitD.style.background = "red";
        time -= 10;
        
       
    } 
    
    console.log("score is:   " + score)
    
    console.log(endScore)

    if (endScore === score){
        // localStorage.clear();
        next.style.visibility = "hidden";
        userScore.style.visibility = "visible";
        question.textContent = "Your score is " +  score + " out of 3";
        answerSection.innerHTML = userScore.innerHTML;

        
            
        
    }
    
   
    
       
    
   
    
    
    
}




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
    // if(counter === funkArray.length){
    //     gameOver ();
    // } else{
    // nextQuestion();
    submitA.style.background = "rgb(239, 239, 239";
    submitB.style.background = "rgb(239, 239, 239";
    submitC.style.background = "rgb(239, 239, 239";
    submitD.style.background = "rgb(239, 239, 239";
    }
}

// const gameOver = function (){
//     clearInterval(timeFunc);
//     let gameoverEl = document.querySelector("#gameOver");
//     gameoverEl.classList.remove("hidden");
//     quizContainer.classList.add("hidden");
//     let endScore = document.querySelector("#endScore");
//     endScore.textContent = time;


// }

// const getHighscores = function () {
//     let endScore = document.querySelector("#endScore");
//     let score = endScore.textContent;
//     let initials = document.getElementById("#initials");




// }

let submitInitials = document.querySelector("submitInitials");




// submitInitials.add("click", getHighscores)
startBtn.addEventListener("click", startQuiz)
submitA.addEventListener("click", answerClick)
submitB.addEventListener("click", answerClick)
submitC.addEventListener("click", answerClick)
submitD.addEventListener("click", answerClick)





















