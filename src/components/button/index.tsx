import React from 'react';

interface ButtonProps {
  type: string;
  onclick?: any;
}

import styles from './button.module.css';

function Button({ type, onclick }: ButtonProps) {
  return (
    <div
      className="z-10 flex items-center gap-3 p-1 uppercase bg-white rounded-full cursor-pointer group md:p-2"
      onClick={onclick}
    >
      <span className={`ml-3 ${styles.text}`}>{type}</span>
      <div className={`${styles.icon} bg-[#303030] group-hover:bg-[#999999]`}>
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
