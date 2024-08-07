export const answerQuestion = (isCorrect) => ({
  type: "ANSWER_QUESTION",
  payload: { isCorrect },
});

export const nextQuestion = () => ({
  type: "NEXT_QUESTION",
});

export const resetQuiz = () => ({
  type: "RESET_QUIZ",
});
