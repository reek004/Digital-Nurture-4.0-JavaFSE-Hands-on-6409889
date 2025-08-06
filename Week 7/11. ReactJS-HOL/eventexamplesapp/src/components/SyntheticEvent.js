import React from 'react';

const SyntheticEvent = () => {
  const handleClick = (event) => {
    // 'event' is a SyntheticEvent
    console.log(event);
    alert('I was clicked');
  };

  return (
    <div>
      <h2>Synthetic Event Example</h2>
      <button onClick={handleClick}>Click Here</button>
    </div>
  );
};

export default SyntheticEvent;