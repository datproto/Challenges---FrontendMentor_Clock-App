import React from 'react';

interface ClockProps {
  time: string;
  city: string;
  country: string;
  darkMode?: boolean;
}

function Clock({ time, city, country, darkMode = false }: ClockProps) {
  return (
    <div className="z-10 text-white">
      <div className="flex items-center gap-4">
        <img
          src={`/assets/desktop/${darkMode ? `icon-moon` : `icon-sun`}.svg`}
          alt=""
        />
        <h4>Good {darkMode ? 'Night' : 'Morning'}</h4>
      </div>
      <div className="flex gap-1.5 my-4">
        <h1>{time}</h1>
        <span
          className="flex items-end mb-2 text-base md:mb-6 xl:mb-5 md:text-[2rem] xl:text-[2.5rem]"
          style={{ lineHeight: '28px' }}
        >
          UTC
        </span>
      </div>
      <h3>
        In {city}, {country}
      </h3>
    </div>
  );
}

export default Clock;
