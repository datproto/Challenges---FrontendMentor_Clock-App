import React from 'react';

interface ButtonProps {
  type: string;
  onclick?: any;
}

function Button({ type, onclick }: ButtonProps) {
  return (
    <div
      className="z-10 flex items-center gap-3 p-2 uppercase bg-white rounded-full cursor-pointer"
      onClick={onclick}
    >
      <span
        className="ml-2"
        style={{
          fontSize: '16px',
          lineHeight: '28px',
          letterSpacing: '5px',
          fontWeight: '700',
          color: '#979797',
        }}
      >
        {type}
      </span>
      <div
        className="relative w-10 h-10 rounded-full"
        style={{ backgroundColor: '#303030' }}
      >
        <div className="absolute flex items-center justify-center w-full h-full">
          <img
            src={`/assets/desktop/${
              type == 'more' ? 'icon-arrow-down.svg' : 'icon-arrow-up.svg'
            }`}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Button;
