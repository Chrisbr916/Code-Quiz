
var timerElement = document.querySelector("#timer");
var startButton = document.querySelector("#StartButton");
var HighScoreTracker = document.querySelector("#VeiwHighscore");
var nameInput = document.querySelector("#name");
var choiceOne = document.getElementById("One");
var choiceTwo = document.getElementById("Two");
var choiceThree = document.getElementById("Three");
var choiceFour = document.getElementById("Four");
var question = document.getElementById("question");



var timer;
var TimerCount;
var score = 0;

let questions = [

    {
        question : "",
        
        choiceOne : "",

        choiceTwo : "",

        choiceThree : "", 

        choiceFour : "",

        correct : "",


    },{
        question : "",
        
        choiceOne : "",

        choiceTwo : "",

        choiceThree : "", 

        choiceFour : "",

        correct : "",



    },{
        question : "",
        
        choiceOne : "",

        choiceTwo : "",

        choiceThree : "", 

        choiceFour : "",

        correct : "",
    }




];
// this sets a constat that will later be used to let the quiz know when to end
const lastQuestion = question.length - 1; 
// the following code makes the quiz start at the the first array
let runningQuestion = 0;

// this will render the question 

function renderQuestion(){
    let q = questions[runningQuestion];


    question.innerHTML = "<p>" + q.question + "</p>"; 

    choiceOne.innerHTML = q.choiceOne;

    choiceTwo.innerHTML = q.choiceTwo;

    choiceThree.innerHTML = qchoiceThree;

    choiceFour.innerHTML = qchoiceFour;
}

start.addEventlistener("click",startQuiz);

