import React from "react";
import "./Result.css";

function Result({ correct, timeout }) {
  if (timeout) {
    return (
      <div className="result timeout">
        <h2>Time's Up!</h2>
      </div>
    );
  }

  return (
    <div className={correct ? "result correct" : "result incorrect"}>
      {correct ? <h2>Correct!</h2> : <h2>Incorrect!</h2>}
    </div>
  );
}

export default Result;
