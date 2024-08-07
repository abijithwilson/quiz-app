const initialState = {
  currentQuestionIndex: 0,
  score: 0,
  showResult: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ANSWER_QUESTION":
      const isCorrect = action.payload.isCorrect;
      return {
        ...state,
        score: isCorrect ? state.score + 1 : state.score,
        showResult: true,
      };
    case "NEXT_QUESTION":
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1,
        showResult: false,
      };
    case "RESET_QUIZ":
      return initialState;
    default:
      return state;
  }
};

export default reducer;
