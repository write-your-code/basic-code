import { useEffect, useState } from "react";
import Countdown from "react-countdown";
import "./Live.css";

export default function Counter({ box = false }) {
  const [expiryTime, setExpiryTime] = useState("21 august 2024 18:00:00");
  const [countdownTime, setCountdownTime] = useState({
    countdownDays: "",
    countdownHours: "",
    countdownlMinutes: "",
    countdownSeconds: "",
  });

  const countdownTimer = () => {
    const timeInterval = setInterval(() => {
      const countdownDateTime = new Date(expiryTime).getTime();
      const currentTime = new Date().getTime();
      const remainingDayTime = currentTime - countdownDateTime;
      const totalDays = Math.floor(remainingDayTime / (1000 * 60 * 60 * 24));
      const totalHours = Math.floor(
        (remainingDayTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const totalMinutes = Math.floor(
        (remainingDayTime % (1000 * 60 * 60)) / (1000 * 60)
      );
      const totalSeconds = Math.floor((remainingDayTime % (1000 * 60)) / 1000);

      const runningCountdownTime = {
        countdownDays: totalDays,
        countdownHours: totalHours,
        countdownMinutes: totalMinutes,
        countdownSeconds: totalSeconds,
      };

      setCountdownTime(runningCountdownTime);

      if (remainingDayTime < 0) {
        clearInterval(timeInterval);
        setExpiryTime(false);
      }
    }, 1000);
  };

  useEffect(() => {
    countdownTimer();
  });
  return (
    <div
      className={`px-2 py-0 bg-transparent text-white flex justify-center items-center relative border border-white uppercase rounded ${
        box ? "box-counter" : ""
      }`}
    >
      {/* <img src="/clock.gif" alt="" className="w-6 absolute" /> */}
      <div className="relative px-4 flex flex-col justify-center items-center border-0 border-l-white">
        <span className="text-xl mr-1 font-normal text-white">
          {countdownTime.countdownDays}
        </span>
        <i className="text-sm font-normal text-white">Days</i>
      </div>
      <div className="relative px-4 flex flex-col justify-center items-center border-l border-l-white">
        <span className="text-xl mr-1 font-normal text-white">
          {countdownTime.countdownHours}
        </span>
        <i className="text-sm font-normal text-white">Hours</i>
      </div>
      <div className="relative px-4 flex flex-col justify-center items-center border-l border-l-white">
        <span className="text-xl mr-1 font-normal text-white">
          {countdownTime.countdownMinutes}
        </span>
        <i className="text-sm font-normal text-white">Mins</i>
      </div>
      <div className="relative px-4 flex flex-col justify-center items-center border-l border-l-white">
        <span className="text-xl mr-1 font-normal text-white">
          {countdownTime.countdownSeconds}
        </span>
        <i className="text-sm font-normal text-white">Secs</i>
      </div>
    </div>
  );
}
