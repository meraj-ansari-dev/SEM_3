/* =========================
   QUIZ QUESTIONS
========================= */

const questions = [

    {
        question: "What does HTML stand for?",

        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyperlink Text Management Language",
            "Home Tool Markup Language"
        ],

        answer: 0
    },


    {
        question: "Which language is used for styling a web page?",

        options: [
            "HTML",
            "CSS",
            "JavaScript",
            "C++"
        ],

        answer: 1
    },


    {
        question: "Which language is used to make a web page interactive?",

        options: [
            "HTML",
            "CSS",
            "JavaScript",
            "SQL"
        ],

        answer: 2
    },


    {
        question: "Which HTML tag is used to create a paragraph?",

        options: [
            "<h1>",
            "<p>",
            "<div>",
            "<br>"
        ],

        answer: 1
    },


    {
        question: "Which symbol is used for an ID selector in CSS?",

        options: [
            ".",
            "#",
            "*",
            "@"
        ],

        answer: 1
    }

];



/* =========================
   GET HTML ELEMENTS
========================= */

const startPage = document.getElementById("startPage");

const quizPage = document.getElementById("quizPage");

const resultPage = document.getElementById("resultPage");


const studentName = document.getElementById("studentName");

const rollNumber = document.getElementById("rollNumber");


const startBtn = document.getElementById("startBtn");

const previousBtn = document.getElementById("previousBtn");

const nextBtn = document.getElementById("nextBtn");

const submitBtn = document.getElementById("submitBtn");

const restartBtn = document.getElementById("restartBtn");


const questionNumber = document.getElementById("questionNumber");

const questionText = document.getElementById("questionText");

const optionsContainer = document.getElementById("optionsContainer");


const displayName = document.getElementById("displayName");

const displayRoll = document.getElementById("displayRoll");

const displaySection = document.getElementById("displaySection");


const resultName = document.getElementById("resultName");

const resultScore = document.getElementById("resultScore");



/* =========================
   VARIABLES
========================= */

let currentQuestion = 0;


/*
    This array stores the answer
    selected by the student.

    Initially every answer is null.
*/

let userAnswers = new Array(questions.length).fill(null);



/* =========================
   START QUIZ
========================= */

startBtn.addEventListener("click", startQuiz);


function startQuiz() {

    /*
        Get student information
    */

    const name = studentName.value.trim();

    const roll = rollNumber.value.trim();

    const selectedSection =
        document.querySelector(
            'input[name="section"]:checked'
        );


    /*
        Check whether information
        has been entered.
    */

    if (name === "") {

        alert("Please enter your name.");

        studentName.focus();

        return;
    }


    if (roll === "") {

        alert("Please enter your roll number.");

        rollNumber.focus();

        return;
    }


    if (!selectedSection) {

        alert("Please select your section.");

        return;
    }


    /*
        Display student information
        on quiz page.
    */

    displayName.textContent = "Name: " + name;

    displayRoll.textContent = "Roll: " + roll;

    displaySection.textContent =
        "Section: " + selectedSection.value;


    /*
        Hide start page
        and show quiz page.
    */

    startPage.style.display = "none";

    quizPage.style.display = "flex";

    resultPage.style.display = "none";


    /*
        Start from first question.
    */

    currentQuestion = 0;

    showQuestion();
}



/* =========================
   SHOW QUESTION
========================= */

function showQuestion() {

    /*
        Get current question
    */

    const question = questions[currentQuestion];


    /*
        Display question number
    */

    questionNumber.textContent =
        "Question " +
        (currentQuestion + 1) +
        " of " +
        questions.length;


    /*
        Display question
    */

    questionText.textContent = question.question;


    /*
        Remove previous options
    */

    optionsContainer.innerHTML = "";


    /*
        Create four options
    */

    question.options.forEach(
        function(option, index) {

            /*
                Create label
            */

            const label = document.createElement("label");

            label.className = "option";


            /*
                Create radio button
            */

            const radio = document.createElement("input");

            radio.type = "radio";

            radio.name = "answer";

            radio.value = index;


            /*
                Check previously selected answer
            */

            if (userAnswers[currentQuestion] === index) {

                radio.checked = true;
            }


            /*
                Store answer when
                radio button is clicked.
            */

            radio.addEventListener(
                "change",
                function() {

                    userAnswers[currentQuestion] =
                        Number(this.value);

                }
            );


            /*
                Add radio button
                and option text.
            */

            label.appendChild(radio);

            label.appendChild(
                document.createTextNode(option)
            );


            /*
                Add option to page
            */

            optionsContainer.appendChild(label);
        }
    );


    /*
        Previous button

        Hide it on first question.
    */

    if (currentQuestion === 0) {

        previousBtn.style.display = "none";

    } else {

        previousBtn.style.display = "block";
    }


    /*
        Next button

        Hide it on last question.
    */

    if (currentQuestion === questions.length - 1) {

        nextBtn.style.display = "none";

        submitBtn.style.display = "block";

    } else {

        nextBtn.style.display = "block";

        submitBtn.style.display = "none";
    }
}



/* =========================
   NEXT QUESTION
========================= */

nextBtn.addEventListener("click", nextQuestion);


function nextQuestion() {

    /*
        Check whether an option
        has been selected.
    */

    if (userAnswers[currentQuestion] === null) {

        alert("Please select an answer.");

        return;
    }


    /*
        Move to next question
    */

    if (currentQuestion < questions.length - 1) {

        currentQuestion++;

        showQuestion();
    }
}



/* =========================
   PREVIOUS QUESTION
========================= */

previousBtn.addEventListener(
    "click",
    previousQuestion
);


function previousQuestion() {

    if (currentQuestion > 0) {

        currentQuestion--;

        showQuestion();
    }
}



/* =========================
   SUBMIT QUIZ
========================= */

submitBtn.addEventListener(
    "click",
    submitQuiz
);


function submitQuiz() {

    /*
        Check last question
    */

    if (userAnswers[currentQuestion] === null) {

        alert("Please select an answer.");

        return;
    }


    /*
        Calculate score
    */

    let score = 0;


    for (
        let i = 0;
        i < questions.length;
        i++
    ) {

        if (
            userAnswers[i] ===
            questions[i].answer
        ) {

            score++;
        }
    }


    /*
        Display result
    */

    resultName.textContent =
        "Student: " + studentName.value;


    resultScore.textContent =
        "Your Score: " +
        score +
        " / " +
        questions.length;


    /*
        Hide quiz page
    */

    quizPage.style.display = "none";


    /*
        Show result page
    */

    resultPage.style.display = "flex";
}



/* =========================
   RESTART QUIZ
========================= */

restartBtn.addEventListener(
    "click",
    restartQuiz
);


function restartQuiz() {

    /*
        Reset answers
    */

    userAnswers =
        new Array(questions.length).fill(null);


    /*
        Reset question number
    */

    currentQuestion = 0;


    /*
        Show start page
    */

    resultPage.style.display = "none";

    quizPage.style.display = "none";

    startPage.style.display = "flex";


    /*
        Clear student information
    */

    studentName.value = "";

    rollNumber.value = "";


    /*
        Remove selected section
    */

    const sections =
        document.querySelectorAll(
            'input[name="section"]'
        );


    sections.forEach(
        function(section) {

            section.checked = false;

        }
    );
}



/* ==================================================
   KEYBOARD EVENTS
================================================== */


/*
    Listen for keyboard press
*/

document.addEventListener(
    "keydown",
    function(event) {


        /*
            ENTER KEY

            Start quiz from start page
        */

        if (
            event.key === "Enter" &&
            startPage.style.display !== "none"
        ) {

            startQuiz();

            return;
        }


        /*
            RIGHT ARROW

            Go to next question
        */

        if (
            event.key === "ArrowRight" &&
            quizPage.style.display !== "none"
        ) {

            if (
                currentQuestion <
                questions.length - 1
            ) {

                nextQuestion();
            }

            return;
        }


        /*
            LEFT ARROW

            Go to previous question
        */

        if (
            event.key === "ArrowLeft" &&
            quizPage.style.display !== "none"
        ) {

            previousQuestion();

            return;
        }


        /*
            ENTER ON LAST QUESTION

            Submit quiz
        */

        if (
            event.key === "Enter" &&
            quizPage.style.display !== "none"
        ) {

            if (
                currentQuestion ===
                questions.length - 1
            ) {

                submitQuiz();
            }
        }

    }
);