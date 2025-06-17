import quotes from './quotes.js';

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

  favoriteBtn.textContent = isFavorite ? '★' : '☆';
}

// Клик по кнопке "сгенерировать цитату"
generateBtn.addEventListener('click', generateRandomQuote);

// Клик по кнопке "звездочка" — добавить/удалить из избранного
favoriteBtn.addEventListener('click', () => {
  if (!randomQuote) return;

  // Переключаем состояние избранного
  randomQuote.isFavorite = !randomQuote.isFavorite;

  favoriteBtn.textContent = randomQuote.isFavorite ? '★' : '☆';

  if (randomQuote.isFavorite) {
    // Создаём карточку избранной цитаты
    const favoriteCard = document.createElement('div');
    favoriteCard.classList.add('favorite-card');

    favoriteCard.innerHTML = `
      <button class="delete-btn">🗑</button>
      <p class="favorite-quote">"${randomQuote.quote}"</p>
      <span class="quote-author">– ${randomQuote.author}</span>
    `;

    favoritesContainer.appendChild(favoriteCard);
  } else {
    // Если убрали из избранного, удаляем карточку
    // Ищем карточку с такой цитатой и удаляем её
    const cards = favoritesContainer.querySelectorAll('.favorite-card');
    cards.forEach(card => {
      const text = card.querySelector('.favorite-quote').textContent.replace(/"/g, '').trim();
      if (text === randomQuote.quote) {
        card.remove();
      }
    });
  }
});

// Делегирование кликов по кнопкам удаления в контейнере избранных
favoritesContainer.addEventListener('click', (event) => {
  if (event.target.classList.contains('delete-btn')) {
    const card = event.target.closest('.favorite-card');
    if (!card) return;

    // Получаем цитату из карточки
    const quoteText = card.querySelector('.favorite-quote').textContent.replace(/"/g, '').trim();

    // Обновляем состояние цитаты в массиве quotes
    const quoteObj = quotes.find(q => q.quote === quoteText);
    if (quoteObj) quoteObj.isFavorite = false;

    // Если эта цитата сейчас показана, обновляем кнопку избранного
    if (randomQuote && randomQuote.quote === quoteText) {
      favoriteBtn.textContent = '☆';
      randomQuote.isFavorite = false;
    }

    // Удаляем карточку из DOM
    card.remove();
  }
});

// Запускаем генерацию первой цитаты при загрузке страницы
generateRandomQuote();
