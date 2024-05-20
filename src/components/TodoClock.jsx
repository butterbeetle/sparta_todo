import { useEffect, useState } from "react";
import formatTime from "../utils/formatTime";

export default function TodoClock() {
  const { year, month, day, weekday, time } = formatTime(new Date());
  const [curTime, setCurTime] = useState(time);

  useEffect(() => {
    const tick = setInterval(() => {
      const { time } = formatTime(new Date());
      setCurTime(time);
    }, 1000);

    return () => clearInterval(tick);
  }, []);

  return (
    <div className="flex gap-4 justify-center p-4 items-center text-white">
      <div className="flex flex-col text-2xl">
        <div>{`${year}년 ${month}월 ${day}일`}</div>
        <div className="text-xl text-end">{weekday}</div>
      </div>
      <div className="text-6xl ">{curTime}</div>
    </div>
  );
}
