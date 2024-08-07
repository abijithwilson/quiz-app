import React, { useEffect, useState } from "react";
import { useQuiz } from "../store/QuizContext";

function Timer() {
  const { dispatch } = useQuiz();
  const [timeLeft, setTimeLeft] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === 1) {
          dispatch({ type: "SHOW_RESULT", payload: { isCorrect: false } });
          return 5;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [dispatch]);

  return <div>Time Left: {timeLeft}s</div>;
}

export default Timer;
