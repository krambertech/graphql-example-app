import { FC, useEffect, useState } from 'react';

type TickingClockProps = {
  timezone?: string;
};

const getCurrentTimeInTimezone = (timezone?: string) => {
  const utcDateString = new Date().toUTCString().replace('GMT', timezone || 'UTC');
  return new Date(utcDateString).toLocaleTimeString('it-IT');
};

const TickingClock: FC<TickingClockProps> = ({ timezone }) => {
  const [time, setTime] = useState<string>(getCurrentTimeInTimezone(timezone));

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(getCurrentTimeInTimezone(timezone));
    }, 1000);
    return () => clearTimeout(timer);
  });

  return <>{time}</>;
};

export default TickingClock;
