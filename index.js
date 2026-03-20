let score = 0;

const questions = [
    {
        question: "What is 4 + 7?",
        choices: ["A. 10", "B. 11", "C. 7"],
        correctAnswer: "B"
    },
    {
        question: "Which is the largest planet?",
        choices: ["A. Mercury", "B. Venus", "C. Jupiter"],
        correctAnswer: "C"
    },
    {
        question: "How many seasons are there?",
        choices: ["A. 3", "B. 4", "C. 5"], 
        correctAnswer: "B"
    }
];
function startQuiz() {
    for (const q of questions) {
        let promptMessage = `${q.question}\n${q.choices.join('\n')}`;
        
        let userAnswer;
        const validChoices = q.choices.map(choice => choice.charAt(0));

        while (true) {
            userAnswer = prompt(promptMessage);
            userAnswer = userAnswer.toUpperCase();

            if (validChoices.includes(userAnswer)) {
                break;
            } else {
                alert(`Invalid input. Please enter one of the following: ${validChoices.join(', ')}`);
            }
        }

        if (userAnswer === q.correctAnswer) {
            score++;
            alert("Correct!");
        } 
    }

    const totalQuestions = questions.length;

    if (score === 0) {
        alert(`You scored 0 out of ${totalQuestions}. Try again!`);
    } else if (score === totalQuestions) {
        alert(`You scored ${score} out of ${totalQuestions}! Perfect score!`);
    } else {
        alert(`You scored ${score} out of ${totalQuestions}. Good job!`);
    }
}
startQuiz();
