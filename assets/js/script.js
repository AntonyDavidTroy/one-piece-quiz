/** Array of Objects */

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
        answer:3
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
]
let quizQuestions = [];
let currentAnswer;


function shuffleQuestions(questionArray) {
    var currentIndex = questionArray.length,  randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      // And swap it with the current element.
      [questionArray[currentIndex], questionArray[randomIndex]] = [
        questionArray[randomIndex], questionArray[currentIndex]];
    }
  
    return questionArray;
}


function displayQuizRules(){
    document.querySelector("button.start-btn").classList.add('hidden');
    document.getElementById('rules').classList.remove('hidden');
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
    currentAnswer = quizQuestions[0];
    displayQuestion(currentAnswer);
}


function startGame(event){
    displayQuizRules();
}


function validateUserAnswer(event){
    const answerIndex = parseInt(event.target.getAttribute('data-answer-number'));
    const correctAnswer = parseInt(currentAnswer['answer']);
    if (answerIndex === correctAnswer){
        console.log('Correct')
    }
    else{
        console.log('incorrect');
    }
}


let startButton = document.querySelector("button.start-btn");
let infoBox = document.getElementsByClassName("info-box");
startButton.addEventListener('click', startGame);
document.getElementById('startQuiz').addEventListener('click', startQuiz);
let answerButtons = document.querySelectorAll(".answer-option").forEach(button => button.addEventListener('click', validateUserAnswer));
