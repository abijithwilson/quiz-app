import React, { useState, useEffect } from "react";
import { useQuiz } from "../store/QuizContext";
import Question from "./Question";
import Result from "./Result";
import Timer from "./Timer";

const quizQuestions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: "Mars",
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: [
      "Mark Twain",
      "Charles Dickens",
      "William Shakespeare",
      "Jane Austen",
    ],
    answer: "William Shakespeare",
  },
  {
    question: "What is the smallest prime number?",
    options: ["0", "1", "2", "3"],
    answer: "2",
  },
];

function Quiz() {
  const { state, dispatch } = useQuiz();
  const [userAnswer, setUserAnswer] = useState("");

  const currentQuestion = quizQuestions[state.currentQuestionIndex];

  useEffect(() => {
    if (state.showResult) {
      const timer = setTimeout(() => {
        dispatch({ type: "NEXT_QUESTION" });
        setUserAnswer("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [state.showResult, dispatch]);

  const handleAnswer = (answer) => {
    setUserAnswer(answer);
    const isCorrect = answer === currentQuestion.answer;
    dispatch({ type: "SHOW_RESULT", payload: { isCorrect } });
  };

  if (state.currentQuestionIndex >= quizQuestions.length) {
    return (
      <div className="final-score">
        <h2>Your Score: {state.score}</h2>
        <button onClick={() => dispatch({ type: "RESET_QUIZ" })}>
          Play Again
        </button>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      {state.showResult ? (
        <Result correct={currentQuestion.answer === userAnswer} />
      ) : (
        <>
          <Question question={currentQuestion} onAnswer={handleAnswer} />
          <Timer />
        </>
      )}
    </div>
  );
}

export default Quiz;
