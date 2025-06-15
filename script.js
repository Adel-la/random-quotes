import quotes from './quotes.js';
const quoteElement = document.getElementById('quote');
const generateBtn = document.getElementById('generate-btn');
const authorElement = document.getElementById('author');
const favoriteBtn = document.getElementById('favorite-quote-btn');


  let randomQuote;
function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  randomQuote = quotes[randomIndex];
  const { quote, author: quoteAuthor } = randomQuote;
  quoteElement.textContent = quote;
  authorElement.textContent = quoteAuthor;

  randomQuote.isFavorite = false;
  favoriteBtn.textContent = '☆';
}

generateBtn.addEventListener('click', generateRandomQuote);

const arrayOfFavoriteQuotes = [];
favoriteBtn.addEventListener('click', () => {
  randomQuote.isFavorite = !randomQuote.isFavorite;
  favoriteBtn.textContent = randomQuote.isFavorite ? '★' : '☆';
  arrayOfFavoriteQuotes.push(quoteElement);
  console.log(randomQuote)
});
console.log(arrayOfFavoriteQuotes)