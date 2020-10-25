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
    var twoMinutes = 5* 1,
        display = document.querySelector('#time');
    startTimer(twoMinutes, display);
};

let answerClick = function(){
    //you'll notice that you can grab the clicked element's VALUE. Good job on setting up values in HTML!
    console.log(this + "    this")
    let value  = this.getAttribute("data-value"); 
  
    //this line grabs the next button and makes it visible
    next.style.visibility = "visible";
  
    //change the answersArray at index "counter" to the selected answer choice (a-d)
    //   answersArray[countSer] = value
    //   let value  = this.getAttribute("data-answer");
    // let value = this.value;  
    
    // console.log(answer + "   ****value before pop");
    // if(this){
    //     answersArray.pop()
    // }
    // console.log(answer + "   ******this will show if popped")
    // answersArray.push(value)
    // console.log(answer + "***** new value")

    answerChosen = value;

    console.log(answerChosen + "   this is the answer chosen")

    if (answerChosen === "a") {
        alert("oh shit it works so far")
        submitA.style.background = "#55FF3A"
        score++;
        alert("GOOD JOB!!")
        
    } else if (answerChosen == "b") {
        alert("fuckin up")
        submitB.style.background = "red";
       score--;
        
    }else if (answerChosen == "c") {
        alert("fuckin up")
        submitC.style.background = "red";
        score--;
        
    }else if (answerChosen == "d") {
        alert("fuckin up")
        submitD.style.background = "red";
        score--;
       
    } else {
        score = 0
    }

    
    console.log(score)
    
    
    
}






// function startTimer(duration, display) {
//     var timer = duration, minutes, seconds;
//         setInterval(function () {
//         minutes = parseInt(timer / 60, 10);
//         seconds = parseInt(timer % 60, 10);

//         minutes = minutes < 10 ? "0" + minutes : minutes;
//         seconds = seconds < 10 ? "0" + seconds : seconds;

//         display.textContent = minutes + ":" + seconds;

//         if (--timer < 0) {
//             timer = duration;
//         }
//     }, 1000);
    
// }

// window.onload = function () {
//     var twoMinutes = 60 * 2,
//         display = document.querySelector('#time');
//     startTimer(twoMinutes, display);
// };



 


 

let nextQuestion = function(){
    console.log(funkArray[counter])
  
    //grab the element with id "question", change its text to the "counter"-th question text.
    
    theQuestion.textContent = funkArray[counter].question;
    answerA.textContent = funkArray[counter].answers[0];
    answerB.textContent = funkArray[counter].answers[1];
    answerC.textContent = funkArray[counter].answers[2];
    answerD.textContent = funkArray[counter].answers[3];

    // answerA.setAttribute("data-value", funkArray[counter].answers[0]);
    // answerB.setAttribute("data-value", funkArray[counter].answers[1]);
    // answerC.setAttribute("data-value", funkArray[counter].answers[2]);
    // answerD.setAttribute("data-value", funkArray[counter].answers[3]);

    // submitA.setAttribute("id", "answer");
    // submitB.setAttribute("id", "answer");
    // submitC.setAttribute("id", "answer");
    // submitD.setAttribute("id", "answer");

    // document.querySelector(".answer").addEventListener("click", answerClick);
    

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


/*submitA.addEventListener("click", answerClick)
submitB.addEventListener("click", answerClick)
submitC.addEventListener("click", answerClick)
submitD.addEventListener("click", answerClick)*/

// console.log(answerClick)
// console.log(answersArray)

















