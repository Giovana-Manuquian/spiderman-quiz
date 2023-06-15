import React from "react";
import "../components/Question.css";

const Question = ({ question, options, handleAnswer }) => {
  return (
    <div className="container2">
      <div className="question">
        <h2>{question}</h2>
      </div>
      <div className="options">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option)}
            className="option"
          >
            <img
              src={process.env.PUBLIC_URL + option.image}
              alt="Option"
              className="optionImage"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
