function startQuiz() {
    let score = 0; // keeps track of correct answers
  
    // Question 1
    let q1;
    while (true) {
      q1 = prompt("What is 7 + 4?\nA: 3\nB: 4\nC: 5").toUpperCase();
      if (q1 === "A" || q1 === "B") break;
      alert("Please enter A or B or C");
    }
    if (q1 === "B") {
      score++;
    }
  
    // Question 2
    let q2;
    while (true) {
      q2 = prompt("What color are denim jeans?\nA: Blue\nB: Green\nC: Tan").toUpperCase();
      if (q2 === "A" || q2 === "B") break;
      alert("Please enter A or B or C");
    }
    if (q2 === "A") {
      score++;
    }
  
    // Question 3
    let q3;
    while (true) {
      q3 = prompt("Which is a programming language?\nA: HTML\nB: JavaScript").toUpperCase();
      if (q3 === "A" || q3 === "B") break;
      alert("Please enter A or B or C");
    }
    if (q3 === "B") {
      score++;
    }
  
    // Show result
    if (score === 0) {
      alert("You got 0 correct. Better luck next time!");
    } else if (score === 3) {
      alert("Perfect! You got all questions correct 🎉");
    } else {
      alert("Nice! You got " + score + " out of 3 correct.");
    }
  }