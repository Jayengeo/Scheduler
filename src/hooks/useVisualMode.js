import { useState } from "react";

const useVisualMode = (initial) => {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  // transitions to next state
  const transition = (newMode, replace = false) => {
    if (replace) {
      setHistory((prev) => prev.slice(0, -1));
      setHistory((prev) => [...prev, newMode]);
    } else {
      setHistory((prev) => [...prev, newMode]);
    }
    setMode(newMode);
  };

  // transitions back to previous state
  const back = () => {
    if (history.length > 1) {
      setHistory(history.slice(0, -1));
      setMode(history[history.length - 2]);
    }
  };
  return { mode, transition, back };
};

export default useVisualMode;
