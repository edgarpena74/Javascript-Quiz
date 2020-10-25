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



let begin = confirm("Click OK to begin the quiz")
console.log(begin)





let funkArray = [
    {
        question : "do you want the funk? huuhhh?",
        answers : ["yeah", "funky", "funky funk", "we want the funk!"],
        // correctAnswer : "a"

    },

    {
        question : "do you want the funk?***",
        answers : ["yeah**", "funky**", "funky funk**", "we want the funk!**"],
        // correctAnswer : "a"
    },

    {
        question : "do you want the funk?//",
        answers : ["yeah//", "funky//", "funky funk//", "we want the funk!//"],
        // correctAnswer : "a"
    }

]

let counter = 0;
let answerChosen = ""
let answer = "a";
let score = 0;



function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
        let clockStuff = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
            clearInterval(clockStuff);
        }
    }, 1000);
    
}

window.onload = function () {
    var twoMinutes = 60* 2,
        display = document.querySelector('#time');
    startTimer(twoMinutes, display);
};

let answerClick = function(){
    
    //you'll notice that you can grab the clicked element's VALUE. Good job on setting up values in HTML!
    console.log(this + "    this")
    let value  = this.getAttribute("data-value"); 
    let endScore = 3;
  
    //this line grabs the next button and makes it visible
    next.style.visibility = "visible";
    
  


    answerChosen = value;

    console.log(answerChosen + "   this is the answer chosen")

    if (answerChosen === "a") {
       
        submitA.style.background = "#55FF3A"
        score++;
        // alert("GOOD JOB!!")
    } else if (answerChosen == "b") {
        submitB.style.background = "red";
    }else if (answerChosen == "c") {
        submitC.style.background = "red";
    }else if (answerChosen == "d") {
        submitD.style.background = "red";
        
       
    } 
    
    console.log("score is:   " + score)
    
    console.log(endScore)

    if (endScore === score){
        // localStorage.clear();
        next.style.visibility = "hidden";
        userScore.style.visibility = "visible";
        question.textContent = "Your score is " +  score + " out of 3";
        answerSection.innerHTML = userScore.innerHTML;
        // // Store
        // localStorage.lastname = "Smith";
        // // Retrieve
        // document.getElementById("userTxt").textContent = localStorage.lastname;
        
            
        
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
    nextQuestion();
    submitA.style.background = "rgb(239, 239, 239";
    submitB.style.background = "rgb(239, 239, 239";
    submitC.style.background = "rgb(239, 239, 239";
    submitD.style.background = "rgb(239, 239, 239";

}

nextQuestion();






submitA.addEventListener("click", answerClick)
submitB.addEventListener("click", answerClick)
submitC.addEventListener("click", answerClick)
submitD.addEventListener("click", answerClick)





















