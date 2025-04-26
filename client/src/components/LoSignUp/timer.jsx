import { useEffect, useState } from "react";

function Countdown({time}) {
  const [timeLeft, setTimeLeft] = useState(0);
  useEffect(() => {
    if (time) {
      setTimeLeft(time * 60);
    }
  }, [time]);
  useEffect(() => {
    if (timeLeft === 0) {
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);
  const formatTime = (seconds) => {
    const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    return `${mins}:${secs}`;
  };

  return (
    <div>
      {formatTime(timeLeft)}
    </div>
  );
}

export default Countdown;
