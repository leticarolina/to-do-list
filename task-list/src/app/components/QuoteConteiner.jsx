"use client";

import { useEffect, useState } from "react";
import { localQuotes } from "../quote";

export function QuoteContainer() {
  console.log(localQuotes);

  const [quote, setQuote] = useState([]);
  const button = (
    <button
      onClick={TweetQuote}
      id="twitter"
      className="twitter-button text-gray-200 text-sm hover:text-cyan-300"
    >
      tweet quote!
    </button>
  );

  useEffect(() => {
    setQuote(localQuotes[Math.floor(Math.random() * localQuotes.length)]);
    // this code above will return an individual object, so that means to access it has to be quote.objectKey
  }, []);

  function TweetQuote() {
    const TweetUrl = `https://twitter.com/intent/tweet?text=${quote.text} - ${quote.author}`;
    window.open(TweetUrl, "_blank");
  }

  return (
    <div className="quote-container col-span-1 text-center  h-fit lg:h-80 shadow-slate-300 relative">
      <div id="quote" className="quote-text pt-8 text-md text-gray-800">
        {quote.text}
      </div>
      <div id="author" className="author italic pt-3 text-gray-500 text-sm">
        {quote.author}
      </div>

      {quote.text && button}
    </div>
  );
}
