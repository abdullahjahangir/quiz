function addQuestionSymbols(){
    area = document.getElementById("question-symbols-area")
    area.innerHTML = ""
    for (let i = 0; i < questions.length; i++) {
        symbol = document.createElement("div");
        symbol.className = "question-symbols"
        if (questionsNo == i)
        {
            symbol.style="background-color:lightblue;";
        }
        else if (answersSelected[i] !== ""){
            symbol.style="background-color:yellow;";
        }
        area.appendChild(symbol)
    }
}
function activeSymbols(){
    for (let i = 0; i < questions.length; i++) {
        if (questionsNo == i)
        {
            document.getElementById("symbols-"+i).style.background="lightblue;";
        }
        else{
            document.getElementById("symbols-"+i).style.border="1px solid black;";
        }
    }
}

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }  
    return array;
}
function genAnswersSelectedArray(answersSelected) {
    for (let i = 0; i < questions.length; i++) {
        answersSelected.push("");
    }
    return answersSelected
}
function getCorrectAnswers(correctAnswers) {
    correctAnswers=[]
    for (let i = 0; i < questions.length; i++) {
        correctAnswers.push(questions[i].answer)
    }
    return correctAnswers
}
function shuffleOptions() {
    for (let i = 0; i < questions.length; i++) {
        questions[i].options = shuffle(questions[i].options)
    }
}

function optionSelected(event){
    optionID = event.target.id;
    op = document.getElementsByClassName("option-area")[0].getElementsByClassName("option")
    let i =0

    while(i<op.length){
        op[i].style.backgroundColor="white"        
        i = i+1}
    op[optionID].style.backgroundColor = "green"
}

function setQuestion()
{
    question = document.getElementsByClassName("question-area")[0];
    question.innerText = questions[questionsNo].Question;
    question.id = questionsNo + "";
}
function setOptions(){
    let i =0;
    option_area = document.getElementsByClassName("option-area")[0];
    option_area.innerHTML = "";
    while(i<questions[questionsNo].options.length){
        option = document.createElement("div");    
        option.className = "option";
        option.id = i + "";
        option.onclick = optionSelected;
        option.innerText = questions[questionsNo].options[i];
        if(option.innerText == answersSelected[questionsNo])
        {
            option.style.backgroundColor = "green";
        }
        i = i + 1;
        option_area.appendChild(option);
    }
}
function nextBtn(){
    if(questionsNo<questions.length-1){
        questionsNo = questionsNo+1;
        renderQuestion()
    }
}
function previousBtn(){
    if(questionsNo>0){
        questionsNo = questionsNo-1;
        renderQuestion()
    }
}
function submitBtn(){
    console.log("submitBtn")
    questionNum = parseInt(document.getElementsByClassName("question-area")[0].id);
    op = document.getElementsByClassName("option-area")[0].getElementsByClassName("option")
    let i =0
    while(i<op.length){
        if(op[i].style.backgroundColor === "green")        
        {
            answersSelected[questionNum] = op[i].innerText;
            nextBtn();
            break;
        }
        i = i+1
    }
}

function SubmitQuiz(){
    localStorage.setItem("correctAnswers",JSON.stringify(correctAnswers));
    localStorage.setItem("answersSelected",JSON.stringify(answersSelected));
}
function renderQuestion(){
    addQuestionSymbols();
    setQuestion()
    setOptions()
    document.getElementById("next").onclick = nextBtn;
    document.getElementById("previous").onclick = previousBtn;
    document.getElementById("submit").onclick = submitBtn;
    document.getElementById("TotalQuestion").innerText = "Total Questions: "+questions.length
    document.getElementById("QuizName").innerText = JSON.parse(localStorage.getItem("Quiz"));
}

correctAnswers = []
answersSelected = []
questionsNo = 0;
questions = JSON.parse(localStorage.getItem("Question"));
// questions = localStorage.getItem("Question");
questions = shuffle(questions);
shuffleOptions();

answersSelected = genAnswersSelectedArray(answersSelected);
correctAnswers = getCorrectAnswers(correctAnswers);


renderQuestion();
// console.log(questions)
