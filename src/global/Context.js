import React, { useState } from 'react';
import { useInterval } from '../hooks';

export const AppContext = React.createContext({});

const AppProvider = ({ children }) => {
  const [queue, setQueue] = useState([]);
  const [paused, setPaused] = useState(true);
  const [time, setTime] = useState(0);

  useInterval(() => {
    if (paused) return;
    setTime(t => t + 1);
    console.log('hello');
  }, 1000);

  return (
    <AppContext.Provider
      value={{
        time,
        paused,
        setPaused,
        reset: () => setTime(0),
        addItem: item => setQueue(q => [...q, item]),
        removeItem: index => setQueue(queue.filter((q, i) => i !== index)),
        queue,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
