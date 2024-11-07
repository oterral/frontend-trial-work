"use client";
import { useState, useEffect } from "react";

export default function Timer() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    setCount(0);
    let interval: NodeJS.Timeout | null = null;
    if (isRunning) {
      interval = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    } else {
      clearInterval(interval!);
    }
    return () => clearInterval(interval!);
  }, [count, isRunning]);

  return (
    <div className="space-y-4 flex flex-col w-64 mx-auto">
      <button
        className={`text-white p-4 rounded font-bold ${
          isRunning ? "bg-red-50" : "bg-blue-500"
        }`}
        onClick={() => setIsRunning(true)}
        type="button"
      >
        {isRunning ? "Reset" : "Start"}
      </button>
      <p className="bg-gray-500 p-4 rounded text-gray-600 text-center">
        Seconds: {count}
      </p>
    </div>
  );
}
