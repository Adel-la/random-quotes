import { favoritesContainer, favoriteBtn } from '../ui/dom.js';
import quotes from '../data/quotes.js';
import { getRandomQuote } from '../core/state.js';

console.log(quotes);
// Создаём карточку избранной цитаты и добавляем в контейнер
export function addFavoriteCard(quoteObj, container) {
  const card = document.createElement('div');
  card.id = quoteObj.id;
  card.classList.add('favorite-card');

  card.innerHTML = `
      <button class="delete-btn">🗑</button>
      <p class="favorite-quote">"${quoteObj.text}"</p>
      <span class="quote-author">– ${quoteObj.author}</span>
    `;

  container.appendChild(card);
}

// Удаляем карточку цитаты из избранного
export function removeCardOfFavorite(container, quote) {
  const cards = container.querySelectorAll('.favorite-card');
  cards.forEach((card) => {
    if (card.id === quote.id) {
      card.remove();
    }
  });
}

// Обновляем кнопку избранного (звёздочку)
export function updateFavoriteButton(isFavorite, button) {
  button.textContent = isFavorite ? '★' : '☆';
}

// Обработчик клика по кнопке удаления на карточке
export function handleDeleteClick(event, container, quotes, favoriteButton) {
  if (!event.target.classList.contains('delete-btn')) return;

  const card = event.target.closest('.favorite-card');
  if (!card) return;

  const quoteObj = quotes.find((q) => q.id === card.id);
  if (!quoteObj) return;

  console.log(quoteObj.id, card)
  if (quoteObj.id === card.id) {
    quoteObj.isFavorite = false;
    updateFavoriteButton(false, favoriteButton);
  }

  card.remove();
}

// Переключение состояния избранного цитаты
export function toggleFavorite(quote, container, button) {
  quote.isFavorite = !quote.isFavorite;
  updateFavoriteButton(quote.isFavorite, button);

  if (quote.isFavorite) {
    addFavoriteCard(quote, container);
  } else {
    removeCardOfFavorite(container, quote);
  }
}

// Настройка обработчиков избранного (звёздочка и удаление карточек)
export function setupFavoriteHandlers(favoritesContainer, favoriteBtn, quotes) {
  favoriteBtn.addEventListener('click', () => {
    const quote = getRandomQuote();
    if (!quote) return;
    toggleFavorite(quote, favoritesContainer, favoriteBtn);
  });

  favoritesContainer.addEventListener('click', (event) => {
    handleDeleteClick(event, favoritesContainer, quotes, favoriteBtn);
  });
}

// Инициализация обработчиков
setupFavoriteHandlers(favoritesContainer, favoriteBtn, quotes);
