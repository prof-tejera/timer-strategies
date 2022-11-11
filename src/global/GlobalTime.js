import { useContext } from 'react';
import { AppContext } from './Context';

const Timer = ({ duration, index }) => {
  const { time, queue, removeItem } = useContext(AppContext);

  // Calculate total time of timers before this one
  const timeBeforeMe = queue.reduce((acc, curr, i) => {
    if (i < index) {
      return curr.duration + acc;
    } else {
      return acc;
    }
  }, 0);

  // This timer is active is the current time is between the sum of
  // all previous and the duration of this one
  const active = time >= timeBeforeMe && time < timeBeforeMe + duration;

  return (
    <div
      style={{
        backgroundColor: active ? 'red' : 'white',
      }}
    >
      Timer - Duration: {duration} - {active && <span>Progress: {time - timeBeforeMe}</span>}
      <button onClick={() => removeItem(index)}>Remove</button>
    </div>
  );
};

export default Timer;
