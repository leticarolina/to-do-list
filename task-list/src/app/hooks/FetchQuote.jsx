import { useEffect, useState } from "react";
import { localQuotes } from "../quote";

export function FetchQuote() {
  const [quote, setQuote] = useState();
  const quoteText = document.getElementById("quote");
  const authorText = document.getElementById("author");

  useEffect(() => {
    setQuote(localQuotes[Math.floor(Math.random() * localQuotes.length)]);
  }, []);

  return quote;
}
