import { FaPlay, FaPause } from 'react-icons/fa6';
import { FaRedo } from 'react-icons/fa';
import { useState } from 'react';

export function Stopwatch() {
  const [seconds, setSeconds] = useState(0);
  const [isPaused, setPaused] = useState(true);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout>();
  const [resetShows, setResetShows] = useState(false);

  function handleStartClick() {
    clearInterval(intervalId);
    setPaused(!isPaused);
    if (isPaused) {
      const interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
      setIntervalId(interval);
      setResetShows(true);
    } else {
      clearInterval(intervalId);
    }
  }

  function handleReset() {
    clearInterval(intervalId);
    setSeconds(0);
    setPaused(true);
    setResetShows(false);
  }
  return (
    <>
      <div className="flex flex-col gap-4 stopwatch-container">
        <div
          onClick={isPaused ? handleReset : undefined}
          className="stopwatch h-[250px] w-[250px] border-4 border-black rounded-full flex justify-center items-center bg-white hover:bg-slate-300">
          <h1 className="text-6xl">{seconds}</h1>
        </div>
        <div className="flex justify-center gap-4 button-group">
          <button
            onClick={handleStartClick}
            className="flex justify-center stopwatch-controls">
            {isPaused ? (
              <FaPlay className="text-6xl text-white" />
            ) : (
              <FaPause className="text-6xl text-white" />
            )}
          </button>
          {resetShows ? (
            <button
              onClick={handleReset}
              className="flex justify-center stopwatch-controls">
              <FaRedo className="text-6xl text-white" />
            </button>
          ) : (
            ''
          )}
        </div>
      </div>
    </>
  );
}
