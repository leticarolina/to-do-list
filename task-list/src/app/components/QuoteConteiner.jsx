"use client";

import { useEffect, useState } from "react";
import { localQuotes } from "../quote";

export function QuoteContainer() {
  console.log(localQuotes);
  const individual =
    localQuotes[Math.floor(Math.random() * localQuotes.length)];
  const [quote, setQuote] = useState(individual);

  useEffect(() => {
    setQuote(localQuotes[Math.floor(Math.random() * localQuotes.length)]);
  }, []);

  return (
    <div className="quote-container col-span-1 rounded-xl text-center p-2 h-fit lg:h-80 shadow-slate-300 relative">
      {/* <!-- <h2>Quote of the Day:</h2> --> */}
      <div id="quote" className="quote-text py-1 text-sm text-gray-800">
        {quote}
      </div>
      <div id="author" className="author italic pt-4 text-gray-500">
        author
      </div>
      <div>
        <button
          id="twitter"
          className="twitter-button text-cyan-500 text-sm hover:text-slate-50 absolute right-0"
        >
          tweet!
        </button>
      </div>
    </div>
  );
}
