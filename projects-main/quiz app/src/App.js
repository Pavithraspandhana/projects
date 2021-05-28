import React, { useState } from "react";

export default function App() {
  const questions = [
    {
      questionText: "1. Everything in React is a _____________?",
      answerOptions: [
        { answerText: " A) Module", isCorrect: false },
        { answerText: " B) Component", isCorrect: true },
        { answerText: " C) Package", isCorrect: false },
        { answerText: " D) Class", isCorrect: false },
      ],
    },

    {
      questionText: "2. In which directory React Components are saved?",
      answerOptions: [
        { answerText: " A)Inside js/components/", isCorrect: true },
        { answerText: " B)Inside vendor/components/", isCorrect: false },
        { answerText: " C)Inside vendor/components/", isCorrect: false },
        { answerText: "D)Inside vendor/", isCorrect: false },
      ],
    },
    {
      questionText: "3. What is Babel??",
      answerOptions: [
        { answerText: " A)A transpiler.", isCorrect: false },
        { answerText: " B)An interpreter", isCorrect: false },
        { answerText: " C) A Compiler", isCorrect: false },
        { answerText: " D) Both Compiler and Transpilar", isCorrect: true },
      ],
    },
    {
      questionText: "4.How many elements does a react component return?",
      answerOptions: [
        { answerText: " A) Element", isCorrect: false },
        { answerText: " B) Elements", isCorrect: false },
        { answerText: " C)Multiple Elements", isCorrect: true },
        { answerText: " 	D)None of the above", isCorrect: false },
      ],
    },

    {
      questionText: "5 . What does the webpack command do?",
      answerOptions: [
        { answerText: " 	A) A module bundler", isCorrect: true },
        {
          answerText: "B) Runs react local development server.",
          isCorrect: false,
        },
        {
          answerText: " C) Transpiles all the Javascript down into one file",
          isCorrect: false,
        },
        { answerText: " D) None of the above", isCorrect: false },
      ],
    },

    {
      questionText: "6 . What is ReactJS?",
      answerOptions: [
        { answerText: "A) Server-side Framework", isCorrect: false },
        { answerText: "B) User-interface framework", isCorrect: false },
        {
          answerText: " C) A Library for building interaction interfaces",
          isCorrect: true,
        },
        { answerText: "	D) None of the Above", isCorrect: false },
      ],
    },

    {
      questionText: "7 .What are the limitations of ReactJS?",
      answerOptions: [
        {
          answerText:
            " A)React is only for view layer of the app so we still need the help of other technologies to get a complete tooling set for development",
          isCorrect: false,
        },
        {
          answerText:
            " B)React is using inline templating and JSX. This can seem awkward to some developers",
          isCorrect: false,
        },
        {
          answerText: " C)The library of react is too large",
          isCorrect: false,
        },
        { answerText: " 	D)All of these", isCorrect: true },
      ],
    },

    {
      questionText:
        "8 .How can you access the state of a component from inside of a member function?",
      answerOptions: [
        { answerText: " A)this.getState()", isCorrect: false },
        { answerText: "B)this.prototype.stateValue", isCorrect: false },
        { answerText: " 	C)this.state", isCorrect: true },
        { answerText: " D)this.values", isCorrect: false },
      ],
    },

    {
      questionText: "9 .	Props are __________ into other components?",
      answerOptions: [
        { answerText: " A)Injected", isCorrect: false },
        { answerText: " B)Methods", isCorrect: true },
        { answerText: " C)Both A and B", isCorrect: false },
        { answerText: " 	D)All of these", isCorrect: false },
      ],
    },

    {
      questionText:
        "10. Which of the following API is a MUST for every ReactJS component?",
      answerOptions: [
        { answerText: " 	A)getInitialState", isCorrect: false },
        { answerText: " 	B)render", isCorrect: false },
        { answerText: " C)renderComponent", isCorrect: true },
        { answerText: " D)None of the Above", isCorrect: false },
      ],
    },
  ];

  //initializing states hooks

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div>
      <h1
        style={{
          color: "green",
          display: "Block",
          justifyContent: "center",
          align: "center",
        }}
      >
        React Js quiz Application
      </h1>
      <div className="app">
        {showScore ? (
          <div className="score-section">
            <h1 style={{ color: "blue" }}>
              You scored {score} out of {questions.length}
            </h1>
          </div>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>Question {currentQuestion + 1}</span>/{questions.length}{" "}
              </div>
              <div className="question-text">
                {questions[currentQuestion].questionText}
              </div>
            </div>
            <div className="answer-section">
              {questions[currentQuestion].answerOptions.map((answerOption) => (
                <button
                  onClick={() =>
                    handleAnswerOptionClick(answerOption.isCorrect)
                  }
                >
                  {answerOption.answerText}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
