import { useContext } from 'react';

import LocalTime from './local/LocalTime';
import AppProvider, { AppContext } from './local/Context';

const Timer = LocalTime;

const Inner = () => {
  const { queue, addItem, paused, setPaused, reset } = useContext(AppContext);

  return (
    <div>
      <button
        onClick={() => {
          addItem({
            duration: Math.floor(Math.random() * 10) + 3,
          });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setPaused(!paused);
        }}
      >
        {paused ? 'Run' : 'Pause'}
      </button>
      <button onClick={reset}>Reset</button>
      <div>
        {queue.map((t, i) => (
          <Timer key={i} index={i} duration={t.duration} />
        ))}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <AppProvider>
      <Inner />
    </AppProvider>
  );
};

export default App;
