import React from "react";
import "../components/Result.css";

const title = "Quiz Completed!";

const Result = ({ score, totalQuestions, restartQuiz }) => {
  const handleRestartQuiz = () => {
    restartQuiz();
  };

  return (
    <div className="container">
      <h2 className="finaltitle">{title}</h2>
      <p className="score">
        Your score: {score}/{totalQuestions}
      </p>
      <div className="restart">
        <button onClick={handleRestartQuiz}>Restart Quiz</button>
      </div>
    </div>
  );
};

export default Result;
