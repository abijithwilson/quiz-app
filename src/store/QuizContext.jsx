import React, { createContext, useReducer, useContext } from "react";

const initialState = {
  currentQuestionIndex: 0,
  showResult: false,
  score: 0,
};

const quizReducer = (state, action) => {
  switch (action.type) {
    case "NEXT_QUESTION":
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1,
        showResult: false,
      };
    case "SHOW_RESULT":
      return {
        ...state,
        showResult: true,
        score: action.payload.isCorrect ? state.score + 1 : state.score,
      };
    case "RESET_QUIZ":
      return initialState;
    default:
      return state;
  }
};

const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => {
  return useContext(QuizContext);
};
