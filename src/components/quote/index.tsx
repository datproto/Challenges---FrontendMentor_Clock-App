import React from 'react';

interface QuoteProps {
  quote: string;
  author: string;
  onclick?: any;
}

function Quote({ quote, author, onclick }: QuoteProps) {
  return (
    <div className="z-10 flex flex-col gap-2 text-white">
      <div id="quote" className="flex flex-row items-start gap-4 xl:gap-2">
        <span className="md:w-[33.75rem] xl:w-1/2 transition-all">{quote}</span>
        <img
          onClick={onclick}
          className="cursor-pointer"
          src="/assets/desktop/icon-refresh.svg"
          alt=""
        />
      </div>

      <div id="author">
        <h5>{author}</h5>
      </div>
    </div>
  );
}

export default Quote;
