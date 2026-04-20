import React, { Fragment, useMemo, useState } from "react";
import { Typography } from "@material-ui/core";
import TimerIcon from "@material-ui/icons/Timer";
import Timer from "./Timer";
import Buttons from "./Buttons";
import { ArrowUp, ArrowDown } from "./Arrows";

const Countdown = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [started, setStarted] = useState(false);
  const [paused, setPaused] = useState(false);
  const [finished, setFinished] = useState(false);

  const handleStart = () => {
    setPaused(true);
    setStarted(true);
  };

  const handlePause = () => {
    if (paused === false) {
      setPaused(true);
    } else {
      setPaused(false);
    }
  };

  const handleReset = () => {
    setStarted(false);
    setPaused(false);
    setFinished(false);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  };

  const hoursPlusHandler = () => {
    setHours(hours + 1);
  };

  const hoursMinusHandler = () => {
    if (hours > 0) {
      setHours(hours - 1);
    }
  };

  const minutesPlusHandler = () => {
    if (minutes < 59) {
      setMinutes(minutes + 1);
    } else {
      setMinutes(0);
      setHours(hours + 1);
    }
  };

  const minutesMinusHandler = () => {
    if (minutes > 0) {
      setMinutes(minutes - 1);
    } else {
      if (hours > 0) {
        setMinutes(59);
        setHours(hours - 1);
      }
    }
  };

  const secondsPlusHandler = () => {
    if (seconds < 59) {
      setSeconds(seconds + 1);
    } else {
      setSeconds(0);
      if (minutes < 59) {
        setMinutes(minutes + 1);
      } else {
        setMinutes(0);
        setHours(hours + 1);
      }
    }
  };

  const secondsMinusHandler = () => {
    if (seconds > 0) {
      setSeconds(seconds - 1);
    } else {
      if (minutes > 0) {
        setSeconds(59);
        setMinutes(minutes - 1);
      }
    }
  };

  const isZeroTime = hours === 0 && minutes === 0 && seconds === 0;

  const helperText = useMemo(() => {
    if (finished) {
      return "Waktu habis. Kamu bisa mulai lagi dengan durasi baru.";
    }

    if (started) {
      return paused
        ? "Timer sedang berjalan. Tekan pause untuk berhenti sejenak."
        : "Timer dijeda. Lanjutkan kapan pun saat siap.";
    }

    return "Pilih jam, menit, dan detik sebelum memulai countdown.";
  }, [finished, paused, started]);

  if (finished) {
    return (
      <section className="countdown-panel">
        <div className="countdown-panel__status">
          <span className="countdown-panel__badge countdown-panel__badge--done">
            Selesai
          </span>
          <Typography variant="h5" className="countdown-panel__message">
            Time&apos;s up!
          </Typography>
          <Typography variant="body2" className="countdown-panel__helper">
            {helperText}
          </Typography>
        </div>

        <div className="countdown-panel__display countdown-panel__display--finished">
          <TimerIcon className="countdown-panel__icon countdown-panel__icon--finished" />
        </div>

        <Buttons
          started={started}
          paused={paused}
          finished={finished}
          handleStart={handleStart}
          handlePause={handlePause}
          handleReset={handleReset}
          disabledStart={false}
        />
      </section>
    );
  } else {
    return (
      <section className="countdown-panel">
        <div className="countdown-panel__status">
          <span className="countdown-panel__badge">
            {started ? "Sedang aktif" : "Siap digunakan"}
          </span>
          <Typography variant="h6" className="countdown-panel__message">
            {started ? "Time Remaining" : "Set countdown kamu"}
          </Typography>
          <Typography variant="body2" className="countdown-panel__helper">
            {helperText}
          </Typography>
        </div>

        {started ? (
          <Fragment>
            <div className="countdown-panel__display">
              <Timer
                hours={hours}
                minutes={minutes}
                seconds={seconds}
                setHours={setHours}
                setMinutes={setMinutes}
                setSeconds={setSeconds}
                started={started}
                paused={paused}
                finished={finished}
                setStarted={setStarted}
                setFinished={setFinished}
              />
            </div>
            <div className="countdown-panel__footer-icon">
              <TimerIcon className="countdown-panel__icon" />
            </div>
          </Fragment>
        ) : (
          <div className="time-picker">
            <div className="time-picker__unit">
              <span className="time-picker__label">Hours</span>
              <ArrowUp onClick={hoursPlusHandler} />
              <span className="time-picker__value">{String(hours).padStart(2, "0")}</span>
              <ArrowDown onClick={hoursMinusHandler} />
            </div>
            <div className="time-picker__unit">
              <span className="time-picker__label">Minutes</span>
              <ArrowUp onClick={minutesPlusHandler} />
              <span className="time-picker__value">{String(minutes).padStart(2, "0")}</span>
              <ArrowDown onClick={minutesMinusHandler} />
            </div>
            <div className="time-picker__unit">
              <span className="time-picker__label">Seconds</span>
              <ArrowUp onClick={secondsPlusHandler} />
              <span className="time-picker__value">{String(seconds).padStart(2, "0")}</span>
              <ArrowDown onClick={secondsMinusHandler} />
            </div>
          </div>
        )}

        <Buttons
          started={started}
          paused={paused}
          finished={finished}
          handleStart={handleStart}
          handlePause={handlePause}
          handleReset={handleReset}
          disabledStart={isZeroTime}
        />
      </section>
    );
  }
};

export default Countdown;
