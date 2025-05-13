import React, { useState } from "react";
import ButtonPanel from "./components/ButtonPanel";
import Display from "./components/Display";
import calculate from "./logic/calculate";
import History from "./components/History";

const App = () => {
  const [state, setState] = useState({ total: null, next: null, operation: null });
  const [history, setHistory] = useState([]);

  const handleClick = (buttonName) => {
    const newState = calculate(state, buttonName);

    // Save calculation to history when pressing =
    if (buttonName === "=" && state.next && state.operation) {
      const expression = `${state.total || ""} ${state.operation} ${state.next}`;
      const result = calculate(state, "=").total;
      setHistory((prev) => [...prev, { expression, result }]);
    }

    setState(newState);
  };

  return (
    <div style={{ maxWidth: "400px", margin: "40px auto", padding: "10px" }}>
      <Display value={state.next || state.total || "0"} />
      <ButtonPanel clickHandler={handleClick} />
      <History history={history} />
    </div>
  );
};

export default App;
