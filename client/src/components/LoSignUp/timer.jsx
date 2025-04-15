import { useEffect, useState } from "react";

function Countdown() {
  const [timeLeft, setTimeLeft] = useState(120);
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
      <h2>Resend code in {formatTime(timeLeft)}</h2>
    </div>
  );
}

export default Countdown;
