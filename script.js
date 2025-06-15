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

  favoriteBtn.textContent = randomQuote.isFavorite ? '★' : '☆';
}

generateBtn.addEventListener('click', generateRandomQuote);


favoriteBtn.addEventListener('click', () => {
  randomQuote.isFavorite = !randomQuote.isFavorite;
  favoriteBtn.textContent = randomQuote.isFavorite ? '★' : '☆';
  
  const card = document.createElement('div')
  card.innerHTML = `
    <p> "${randomQuote.quote}" </p>
    <span> ${randomQuote.author} </span> 
  `
  document.getElementById('containerOfFavoriteQutes').appendChild(card)
  card.classList.add('favorite-card')
});
