/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Image from 'next/image';
import styles from './button.module.css';

interface ButtonProps {
  type: string;
  onclick?: () => void;
}

function Button({ type, onclick }: ButtonProps) {
  return (
    <div
      className="z-10 flex items-center gap-3 p-1 uppercase bg-white rounded-full cursor-pointer group md:p-2"
      onClick={onclick}
    >
      <span className={`ml-3 ${styles.text}`}>{type}</span>
      <div className={`${styles.icon} bg-[#303030] group-hover:bg-[#999999]`}>
        <div className="absolute flex items-center justify-center w-full h-full">
          <Image
            src={`/assets/desktop/${
              type === 'more' ? 'icon-arrow-down.svg' : 'icon-arrow-up.svg'
            }`}
            alt="icon"
          />
        </div>
      </div>
    </div>
  );
}

Button.defaultProps = {
  onclick: null,
};

export default Button;
