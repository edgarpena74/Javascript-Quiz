//i might need to add prevent default behavior.
let omg = document.getElementsByName(omg)
function quizHTML (){
    document.querySelector("#quiz").innerHTML = " <div id="quiz">
    <section id="centerBox" class="flex-box">
        <div id = "container" class="container">
            <div id="jsHeader" class="row col-md-12"><h2>Javascript Quiz</h2></div>
            <div id="questionSection" class="row col-md-12"><span id="question">
                questions will go here questions will go here 
                questions will go here  questions will go here 
                questions will go here  questions will go here 
            </span></div>
            <br>
            <div id="answerSection">
                <div class="row">
                    <div class="col-md-12">
                        <button type="submit"> A </button>
                        <span id="answerA">ANSWER WILL GO HERE</span>
                    </div>
                </div>
                <br>
                <div class="row">
                    <div class="col-md-12">
                        <button type="submit"> B </button>
                        <span id="answerB">ANSWER WILL GO HERE</span>
                    </div>
                </div>
                <br>
                <div class="row">
                    <div class="col-md-12">
                        <button type="submit"> C </button>
                        <span id="answerC">ANSWER WILL GO HERE</span>
                    </div>
                </div>
                <br>
                <div class="row">
                    <div class="col-md-12">
                        <button type="submit"> D </button>
                        <span id="answerD">ANSWER WILL GO HERE</span>
                    </div>
                </div>
            </div>

        </div>


    </section>
</div>  ";

}

console.log (omg)