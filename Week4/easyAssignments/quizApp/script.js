const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

//loads quiz context from array
function loadQuiz(){
    deselectAnswers();
    const data  = quizData[currentQuiz]; 

    questionEl.textContent = data.question;
    a_text.textContent = data.a;
    b_text.textContent=data.b;
    c_text.textContent=data.c;
    d_text.textContent=data.d;
}

//unlocks / unselects all radio btns
function deselectAnswers(){
    answerEls.forEach(el=> el.checked = false);
}

//get selected answer by user viaid
function getSelected(){
    let answer;
    answerEls.forEach(el =>{
        if(el.checked) answer = el.id;
    });
    return answer;
}

//attaching eventlistner to submit btn
submitBtn.addEventListener("click",() =>{
    let answer = getSelected();
    if(answer){
        if(answer === quizData[currentQuiz].correct) score++;

        currentQuiz++;

        if(currentQuiz < quizData.length){
            loadQuiz();
        }else{
            quiz.innerHTML = `
                <h2>You scored ${score} / ${quizData.length}</h2>
                <button onclick="location.reload()">Reload</button>
            `;
        
        }
    }
});



