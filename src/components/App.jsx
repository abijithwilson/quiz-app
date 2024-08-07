import React from "react";
import { Provider } from "react-redux";
import store from "../store/store";
import Quiz from "./components/Quiz";

function App() {
  return (
    <Provider store={store}>
      <Quiz />
    </Provider>
  );
}

export default App;
