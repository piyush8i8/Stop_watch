import React, { useEffect, useState } from 'react';

const Stopwatch = () => {
  const [time, settime] = useState(0);
  const [running, setrunning] = useState(false);
    
  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        settime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="h-64 w-72 bg-slate-200 rounded-md drop-shadow-2xl flex flex-col items-center justify-center">
        <h1 className="text-4xl font-semibold mb-4">Stopwatch</h1>
        <div className="text-2xl font-mono mb-4">
          <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((time / 10) % 60)).slice(-2)}</span>
        </div>
        <div className="flex space-x-2">
          {running ? (
            <button
              className="px-6 py-2 text-center text-white bg-violet-600 border border-violet-600 rounded hover:bg-transparent hover:text-violet-600"
              onClick={() => setrunning(false)}
            >
              Stop
            </button>
          ) : (
            <button
              className="px-6 py-2 text-center text-white bg-violet-600 border border-violet-600 rounded hover:bg-transparent hover:text-violet-600"
              onClick={() => setrunning(true)}
            >
              Start
            </button>
          )}
          <button
            className="px-6 py-2 text-center text-white bg-violet-600 border border-violet-600 rounded hover:bg-transparent hover:text-violet-600"
            onClick={() => settime(0)}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stopwatch;
