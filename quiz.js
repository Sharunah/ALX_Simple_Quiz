function checkAnswer() {
    let correctAnswer = '4'
}

function checkAnswer() {
    let correctAnswer = "4"; // Correct answer
    let userAnswer = document.querySelector('input[name="quiz"]:checked').value; // Retrieve user's answer

    // Additional logic can go here
}

function checkAnswer() {
    let correctAnswer = "4"; // Correct answer
    let userAnswer = document.querySelector('input[name="quiz"]:checked').value; // Retrieve user's answer

    let feedback = document.getElementById('feedback'); // Select the feedback element

    // Compare userAnswer with correctAnswer
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done."; // Update feedback for correct answer
    } else {
        feedback.textContent = "That's incorrect. Try again!"; // Update feedback for incorrect answer
    }
}
// Select the "Submit Answer" button by its ID
let submitButton = document.getElementById('submit-answer');

// Add a click event listener to the button
submitButton.addEventListener('click', checkAnswer);

