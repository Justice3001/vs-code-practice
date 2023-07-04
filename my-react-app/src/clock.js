import React, { useEffect, useState } from "react";


const Clock = (props) => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

 
  return (
    <div>
      {time}
    </div>
  );
};

Clock.propTypes = {};

export default Clock;