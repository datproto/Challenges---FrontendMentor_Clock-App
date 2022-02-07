/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Image from 'next/image';

interface QuoteProps {
  quote: string;
  author: string;
  onclick?: () => void;
}

function Quote({ quote, author, onclick }: QuoteProps) {
  return (
    <div className="z-10 flex flex-col gap-2 text-white">
      <div id="quote" className="flex flex-row items-start gap-4 xl:gap-2">
        <span className="md:w-[33.75rem] xl:w-1/2 transition-all">{quote}</span>
        <Image
          onClick={onclick}
          className="cursor-pointer"
          src="/assets/desktop/icon-refresh.svg"
          alt="re-quote"
        />
      </div>

      <div id="author">
        <h5>{author}</h5>
      </div>
    </div>
  );
}

Quote.defaultProps = {
  onclick: null,
};

export default Quote;
