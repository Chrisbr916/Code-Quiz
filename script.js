
var timerElement = document.querySelector("#timer");
var startButton = document.querySelector(".StartGame");
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
var timeLeft = 60;



let questions = [

    {
        question : "What languge do you use MAINLY to change how websites look",
        
        choiceOne : "HTML",

        choiceTwo : "CSS",

        choiceThree : "Javascript", 

        choiceFour : "none of these",

        correct : "Two",


    },{
        question : "What does HTML stand for?",
        
        choiceOne : "hyper text markup language",

        choiceTwo : "how to make love",

        choiceThree : "Home tool markup language", 

        choiceFour : "hyperlinks and text markup languages",

        correct : "One",



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
const lastQuestion = questions.length - 1; 
// the following code makes the quiz start at the the first array
let runningQuestion = 0;

// this will render the question 

function renderQuestion(){
    let q = questions[runningQuestion];

    //this summons the question of what is listed 
    //question.innerHTML = "<p>" + q.question + "</p>"; 

    choiceOne.value = q.choiceOne;

   // choiceTwo.innerHTML = q.choiceTwo;

   // choiceThree.innerHTML = q.choiceThree;

    //choiceFour.innerHTML = q.choiceFour;
}
//this sets the question to the firs one and the next line renders the first question
runningQuestion = 0;
renderQuestion();
//this flips it to the next question and then renders the question
runningQuestion++;
renderQuestion();



// this set of code will render rthe counter 

function timerRender(){


}

//let timer = setInterval(timerRender,1000);



//this part will be the set up of the check answer function, which will check to see if the selecetd answer is corect
function checkAnswer(answer){
    if (question[runningQuestion].correct != answer){
        timer -3;
    }
    //this next bit flips throug hthe questons as long as it is not the last question 
    if (runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }
    //this is where I need to have the score shown and have it recoreded as well as log the persons initial with an else

}
// this and query selector are the same thing 
//const startButton = document.getElementById("StartGame");
//this waits for the click to start the mention function that will stat the quiz
startButton.addEventListener("click",startQuiz);

function startQuiz(){
   // start.style.display = "none"; 
    //this makes the timer show up
    console.log("this is working")
    timerRender();
    // this makes the timer get called every one second
    timer = setInterval(timerRender,1000)
    renderQuestion();
    //startQuiz.style.display = "block";
}