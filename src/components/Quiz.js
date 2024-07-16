import React, { useState } from "react";
import Question from "./Question";
import Result from "./Result";
import questions from "../data/questions";
import "../components/Quiz.css";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleAnswer = (selectedOption) => {
    if (selectedOption.isCorrect) {
      setScore((prevScore) => prevScore + 10); // Incrementa o score por 10
      setShowFeedback(true);
    } else {
      setShowFeedback(false);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setShowFeedback(false);
  };

  return (
    <div className="quiz">
      <h2 className="score">Score: {score}</h2>
      {showFeedback && <p className="feedback"></p>}
      {showResult ? (
        <Result
          score={score}
          totalQuestions={questions.length}
          restartQuiz={restartQuiz}
        />
      ) : (
        <Question
          question={questions[currentQuestion].question}
          options={questions[currentQuestion].options}
          handleAnswer={handleAnswer}
        />
      )}
    </div>
  );
};

export default Quiz;
