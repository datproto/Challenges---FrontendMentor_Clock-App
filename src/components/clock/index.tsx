import React from 'react';

function Clock() {
  return (
    <div className="z-10 text-white">
      <div className="flex items-center gap-4">
        <img src="/assets/desktop/icon-sun.svg" alt="" />
        <h4>Good morning</h4>
      </div>
      <div className="flex gap-1.5 my-4">
        <h1>11:37</h1>
        <span
          className="flex items-end mb-2 text-base"
          style={{ lineHeight: '28px' }}
        >
          BST
        </span>
      </div>
      <h3>In London, UK</h3>
    </div>
  );
}

export default Clock;
