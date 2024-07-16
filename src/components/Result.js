import React from "react";
import "../components/Result.css";

const title = "Quiz Completed!";

const Result = ({ score, totalQuestions, restartQuiz }) => {
  const handleRestartQuiz = () => {
    restartQuiz();
  };

  // Calcula o total de pontos possíveis como o número de perguntas multiplicado por 10
  const totalPoints = totalQuestions * 10;

  return (
    <div className="container">
      <h2 className="finaltitle">{title}</h2>
      <p className="score">
        Your score: {score}/{totalPoints}
      </p>
      <div className="restart">
        <button onClick={handleRestartQuiz}>Restart Quiz</button>
      </div>
    </div>
  );
};

export default Result;
