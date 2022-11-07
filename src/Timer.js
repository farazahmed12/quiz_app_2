import React from "react";

export default function Timer({ questionNumber, setStop }) {
  const [timer, setTimer] = React.useState(30);

  React.useEffect(() => {
    if (timer === 0) return setStop(true);
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [setStop, timer]);

  React.useEffect(() => {
    setTimer(30);
  }, [questionNumber]);

  return timer;
}
