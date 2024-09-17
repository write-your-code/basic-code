import { useEffect, useState } from "react";
import Countdown from "react-countdown";
import "./Live.css";

export default function Counter() {
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
    <div className="px-2 py-1 bg-white flex justify-center items-center relative box-3">
      {/* <img src="/clock.gif" alt="" className="w-6 absolute" /> */}
      <div className="relative ml-1 mx-2 flex flex-col justify-center items-center">
        <span className="text-2xl font-bold text-gray-700">
          {countdownTime.countdownDays} :
        </span>
        <i className="text-md font-bold text-gray-700">Days</i>
      </div>
      <div className="relative mx-2 flex flex-col justify-center items-center">
        <span className="text-2xl font-bold text-gray-700">
          {countdownTime.countdownHours} :
        </span>
        <i className="text-md font-bold text-gray-700">Hours</i>
      </div>
      <div className="relative mx-2 flex flex-col justify-center items-center">
        <span className="text-2xl font-bold text-gray-700">
          {countdownTime.countdownMinutes} :
        </span>
        <i className="text-md font-bold text-gray-700">Mins</i>
      </div>
      <div className="relative mx-2 flex flex-col justify-center items-center">
        <span className="text-2xl font-bold text-gray-700">
          {countdownTime.countdownSeconds}
        </span>
        <i className="text-md font-bold text-gray-700">Secs</i>
      </div>
    </div>
  );
}
