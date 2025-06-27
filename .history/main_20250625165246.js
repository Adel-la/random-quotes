import { 
  addFavoriteCard, 
  removeCardOfFavorite, 
  updateFavoriteButton, 
  handleDeleteClick 
} from './src/handlers/favorites.js';
import quotes from './src/quotes.js';

const quoteElement = document.getElementById('quote');
const generateBtn = document.getElementById('generate-btn');
const authorElement = document.getElementById('author');
const favoriteBtn = document.getElementById('favorite-quote-btn');
const favoritesContainer = document.getElementById('containerOfFavoriteQuotes');

let randomQuote = null;

// Генерация случайной цитаты
function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  randomQuote = quotes[randomIndex];
  const { quote, author: quoteAuthor, isFavorite = false } = randomQuote;

  quoteElement.textContent = quote;
  authorElement.textContent = quoteAuthor;

  updateFavoriteButton(randomQuote.isFavorite, favoriteBtn)
}

// Клик по кнопке "сгенерировать цитату"
generateBtn.addEventListener('click', generateRandomQuote);

// Клик по кнопке "звездочка" — добавить/удалить из избранного
favoriteBtn.addEventListener('click', () => {
  if (!randomQuote) return;

  // Переключаем состояние избранного
  randomQuote.isFavorite = !randomQuote.isFavorite;

  favoriteBtn.textContent = randomQuote.isFavorite ? '★' : '☆';

  if (randomQuote.isFavorite) addFavoriteCard(randomQuote, favoritesContainer)
     else removeCardOfFavorite(randomQuote.quote, favoritesContainer)
});

// Делегирование кликов по кнопкам удаления в контейнере избранных
favoritesContainer.addEventListener('click', (event) => {
   handleDeleteClick(event, favoritesContainer, quotes, randomQuote, favoriteBtn)
})

// Запускаем генерацию первой цитаты при загрузке страницы
generateRandomQuote();
