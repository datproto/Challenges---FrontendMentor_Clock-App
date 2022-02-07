import React from 'react';

function Quote() {
  return (
    <div className="z-10 flex flex-col gap-2 text-white">
      <div id="quote" className="flex flex-row items-start gap-4">
        <span>
          “The science of operations, as derived from mathematics more
          especially, is a science of itself, and has its own abstract truth and
          value.”
        </span>
        <img src="/assets/desktop/icon-refresh.svg" alt="" />
      </div>

      <div id="author">
        <h5>Ada Lovelace</h5>
      </div>
    </div>
  );
}

export default Quote;
