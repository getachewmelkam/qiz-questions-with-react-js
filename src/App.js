import React, { useState } from "react";
import "./App.css";

function App() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "What is the capital of Ethiopia?",
      options: [
        { id: 0, text: "Addis ababa", isCorrect: true },
        { id: 1, text: "Diredawa", isCorrect: false },
        { id: 2, text: "Bahiredar", isCorrect: false },
        { id: 3, text: "Adama", isCorrect: false },
      ],
    },
    {
      text: "How many articles have Ethiopian's constitution?",
      options: [
        { id: 0, text: "100", isCorrect: false },
        { id: 1, text: "106", isCorrect: true },
        { id: 2, text: "135", isCorrect: false },
        { id: 3, text: "54", isCorrect: false },
      ],
    },
    {
      text: "Who is the president of the Ethipia?",
      options: [
        { id: 0, text: "Birhanu", isCorrect: false },
        { id: 1, text: "Temesgen", isCorrect: false },
        { id: 2, text: "Abiy", isCorrect: true },
        { id: 3, text: "none", isCorrect: false },
      ],
    },
    {
      text: "What is the largest state in the Ethiopia?",
      options: [
        { id: 0, text: "Tigray", isCorrect: false },
        { id: 1, text: "Gambella", isCorrect: false },
        { id: 2, text: "hareri", isCorrect: false },
        { id: 3, text: "none", isCorrect: true },
      ],
    },
    {
      text: "Which of the following countries DO NOT border the Ethiopia?",
      options: [
        { id: 0, text: "Sudan", isCorrect: false },
        { id: 1, text: "Russia", isCorrect: true },
        { id: 2, text: "Ertria", isCorrect: false },
        { id: 3, text: "Somali", isCorrect: false },
      ],
    },
  ];

  // Helper Functions

  /* A possible answer was clicked */
  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className="App">
      {/* 1. Header  */}
      <h1>Ethiopian question</h1>

      {/* 2. Current Score  */}
      <h2>Score: {score}</h2>

      {/* 3. Show results or show the question game  */}
      {showResults ? (
        /* 4. Final Results */
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button onClick={() => restartGame()}>Restart game</button>
        </div>
      ) : (
        /* 5. Question Card  */
        <div className="question-card">
          {/* Current Question  */}
          <h2>
            Question: {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>

          {/* List of possible answers  */}
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;