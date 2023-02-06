function getCorrectAnswers(){
    return JSON.parse(localStorage.getItem("correctAnswers"));
}
function getAnswersSelected(){
    return JSON.parse(localStorage.getItem("answersSelected"));
}
correctAnswers = getCorrectAnswers();
answersSelected = getAnswersSelected();
function renderResult(){
    console.log("correctAnswers: ",correctAnswers)
    console.log("answersSelected: ",answersSelected)
    for (let i = 0; i < correctAnswers.length; i++) {
        tr = document.createElement("tr")

        td1 = document.createElement("td")
        td1.innerText = i+1;

        td2 = document.createElement("td");
        td2.innerText = answersSelected[i];

        td3 = document.createElement("td");
        td3.innerText = correctAnswers[i];    

        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)

        tbody = document.getElementById("Result");
        tbody.appendChild(tr)
    }   
}
function testScore()
{
    total = 0
    for (let i = 0; i < correctAnswers.length; i++) {
        if(correctAnswers[i]===answersSelected[i])
        {
            total = total+1;
        }
    }
    document.getElementById("score").innerText = "Your Score is "+total+" / "+correctAnswers.length;
}
testScore()
renderResult();