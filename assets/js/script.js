let quiz = [
    {
        q:"Who was the first member to join Luffy's crew in the Straw Hat Pirates?",
        options:["Zoro","Sanji","Nami","Usopp"],
        answer:1
    },
    {
        q:"Who is Luffy's father?",
        options:["Gol D. Roger","Garp","Monkey D. Dragon","Shanks",],
        answer:3
    },
    {
        q:"What devil fruit did Luffy eat?",
        options:["Mero Mero no Mi","Goro Goro no Mi","Yami Yami no Mi","Gomu-Gomu no Mi"],
        answer:4
    },
    {
        q:"How many Swords does Zoro wield?",
        options:["1","2","3","4"],
        answer:3
    },
    {
        q:"How much was Luffy's first Bounty?",
        options:["20,000,000 Berries","25,000,000 Berries","30,000,000 Berries","35,000,000 Berries"],
        answer:3
    },
    {
        q:"What did Shanks lose when he saved Luffy from drowning?",
        options:["An arm","A leg","A foot","A hand"],
        answer:1
    },
    {
        q:"What is the correct order of highest to lowest bounties, after Enies Lobby Arc? ",
        options:["Luffy, Zoro, Sanji, Robin, Usopp","Luffy, Sanji, Zoro, Robin, Usopp","Luffy, Zoro, Usopp, Sanji, Robin","Luffy, Zoro, Robin, Sanji, Usopp"],
        answer:4
    },
    {
        q:"What Sea does Sanji Originally come from?",
        options:["North Blue","East Blue","South Blue","West Blue"],
        answer:1
    },
    {
        q:"How many years was Brook stranded alone for afrer his crew died?",
        options:["40","50","60","80"],
        answer:2
    },
    {
        q:"Who was the first member to reach the Thousand Sunny after the time-skip?",
        options:["Zoro","Franky","Nami","Robin"],
        answer:2
    },
    {
        q:"How many Warlords has Luffy defeated by the Wano Arc?",
        options:["6","4","5","7"],
        answer:2
    },
    {
        q:"How many different swords has Zoro wielded as of chapter 1,000?",
        options:["7","9","10","12"],
        answer:3
    },
    {
        q:"How many times was Whitebeard shot with bullets during the Paramount War arc?",
        options:["112","214","96","152"],
        answer:4
    },
    {
        q:"How many times has Red Haired Shanks appeared in the manga as of chapter 1,000?",
        options:["18","15","22","25"],
        answer:1
    },
    {
        q:"What devil fruit does Sengoku have?",
        options:["Mito Mito no Mi","Gito Gito no Mi","Jito Jito no Mi","Hito Hito no Mi"],
        answer:1
    },
    {
        q:"What town was the Pirate King executed",
        options:["Logtown","Loguetown","Moontown","Lunartown"],
        answer:2
    },
    {
        q:"Who helps Luffy sneak into Impel Down?",
        options:["Boa Hancock","Shanks","Mihawk","Buggy"],
        answer:1
    },
    {
        q:"Who was the first pirate captain Luffy defeated?",
        options:["Buggy","Krieg","Arlong","Alvida"],
        answer:4
    },
    {
        q:"Which one of these are not a type of Haki?",
        options:["Arnament","Conquerer's","Divinity","Observation"],
        answer:3
    },
    {
        q:"Which one of these swords does Zoro not own?",
        options:["Wado Ichimonji","Kikoku ","Shusui","Sandai Kitetsu "],
        answer:2
    },
];

let quizQuestions = [];
let currentQuestion;
let currentIndex = [0];
let questionIndex = 0;
let score = 0;
let questionCounter = 0;


function shuffleQuestions(questionArray) {
    var currentIndex = questionArray.length,  randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [questionArray[currentIndex], questionArray[randomIndex]] = [
        questionArray[randomIndex], questionArray[currentIndex]];
    }
  
    return questionArray;
}


function displayQuizRules(){
    document.querySelector("button.start-btn").classList.add('hidden');
    document.getElementById('rules').classList.remove('hidden');
}

function leaveQuiz(){
    document.getElementById('rules').classList.add('hidden');    
    document.querySelector("button.start-btn").classList.remove('hidden');

}

function displayQuestion(question){
    document.getElementById("questionText").innerText = question['q'];
    document.getElementById("option1").innerText = question['options'][0];
    document.getElementById("option2").innerText = question['options'][1];
    document.getElementById("option3").innerText = question['options'][2];
    document.getElementById("option4").innerText = question['options'][3];
    
    document.getElementById('rules').classList.add('hidden');
    document.getElementById("quiz-box").classList.remove('hidden');
}

function startQuiz(event){
    quizQuestions = shuffleQuestions(quiz);
    currentQuestion = quizQuestions[questionIndex];
    displayQuestion(currentQuestion);
    questionCounter++;  
}


function startGame(event){
    displayQuizRules();
}


function validateUserAnswer(event){
    const answerIndex = parseInt(event.target.getAttribute('data-answer-number'));
    const correctAnswer = parseInt(currentQuestion['answer']);
    if (answerIndex === correctAnswer){
        score += 1; 
        correctScore.innerHTML = score ;
        resultsScore.innerHTML = score ;
        console.log('Correct');

    }
    else{
        console.log('incorrect');
    }
    questionIndex += 1;
    if (questionIndex < quizQuestions.length){
        currentQuestion = quizQuestions[questionIndex];
        displayQuestion(currentQuestion);
        questionNumber.innerHTML = questionIndex + 1;
    }
    else{
        document.getElementById("results-box").classList.remove('hidden');   
        document.getElementById("quiz-box").classList.add('hidden');
        console.log('quiz over');
    }
}

function finishGame (){
    console.log('finshed');
}

function resetQuiz() {
    quizQuestions = [];
    currentAnswer = null;
    currentIndex = 0;
    questionIndex = 0;
    score = 0;
    questionCounter = 0;
    document.getElementById('results-box').classList.add('hidden');
    correctScore.innerHTML = score ;
    resultsScore.innerHTML = score ;
    questionNumber.innerHTML = questionIndex + 1;
}

function retryQuiz() {
    resetQuiz();
    startQuiz();
}

function quitQuiz() {
    leaveQuiz();
    resetQuiz();
    document.getElementById("results-box").classList.add('hidden');
}


let startButton = document.querySelector("button.start-btn");
startButton.addEventListener('click', startGame);
document.getElementById('startQuiz').addEventListener('click', startQuiz);
let answerButtons = document.querySelectorAll(".answer-option").forEach(button => button.addEventListener('click', validateUserAnswer));
let exitQuiz = document.getElementById('exit-btn');
exitQuiz.addEventListener('click', leaveQuiz);
let questionNumber = document.getElementById('question-Number');
let resultsScore = document.getElementById('results-Score');
let correctScore = document.getElementById('correct-answers');
let retryQuizBtn = document.getElementById('retry-btn');
retryQuizBtn.addEventListener('click', retryQuiz );
let quitQuizBtn = document.getElementById('quit-btn');
quitQuizBtn.addEventListener('click', quitQuiz);