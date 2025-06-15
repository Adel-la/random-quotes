import quotes from "./quotes.js";
const quoteElement = document.getElementById('quote');
const generateBtn = document.getElementById('generate-btn');
const authorElement = document.getElementById('author');

function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  const{quote, author: quoteAuthor} = randomQuote
  quoteElement.textContent = quote;
  authorElement.textContent = quoteAuthor;
}

generateBtn.addEventListener('click', generateRandomQuote);