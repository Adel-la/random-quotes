import { favoritesContainer, favoriteBtn } from '../ui/dom.js';
import quotes from '../data/quotes.js';
import { getRandomQuote } from '../core/state.js';
import { renderFavoriteQuote } from '../ui/index.js';
// Создание карточки
export function addFavoriteCard(quoteObj, container) {
  const existing = container.querySelector(`#${CSS.escape(quoteObj.id)}`);
  if (existing) return; // 💥 Предотвращаем дубликат

  const card = document.createElement('div');
  card.id = quoteObj.id;
  card.classList.add('favorite-card');

  card.innerHTML = `
    <button class="delete-btn">🗑</button>
    <p class="favorite-quote">${quoteObj.text}</p>
    <span class="quote-author">– ${quoteObj.author}</span>
  `;

  container.appendChild(card);
}

// Удаление карточки
export function removeCardOfFavorite(container, quote) {
  const card = container.querySelector(`#${CSS.escape(quote.id)}`);

  if (card) card.remove();
}

export function updateFavoriteButton(isFavorite, button) {
  button.textContent = isFavorite ? '★' : '☆';
}

// ✅ Основной обработчик кликов по delete
export function handleDeleteClick(event, container, quotes, favoriteButton) {
  if (!event.target.classList.contains('delete-btn')) return;

  const card = event.target.closest('.favorite-card');
  if (!card) return;

  const id = card.id;

  const quoteObj = quotes.find((q) => q.id.toString() === id.toString());
  if (quoteObj) quoteObj.isFavorite = false;

  // Удаление из localStorage
  const updatedFavorites = getFavorites().filter(
    (q) => q.id.toString() !== id.toString()
  );
  saveFavorite(updatedFavorites);

  // Удаление из DOM
  card.remove();

  // Обновим звёздочку, если удаляем текущую
  if (id === getRandomQuote().id) {
    updateFavoriteButton(false, favoriteButton);
  }

  // Обновим localStorage
}

// Переключатель избранного
export function toggleFavorite(quote, container, button) {
  quote.isFavorite = !quote.isFavorite;
  updateFavoriteButton(quote.isFavorite, button);

  let favorites = getFavorites();

  if (quote.isFavorite) {
    // Не добавляем дубликат
    const alreadyIn = favorites.some(
      (q) => q.id.toString() === quote.id.toString()
    );
    if (!alreadyIn) {
      favorites.push({ id: quote.id, text: quote.text, author: quote.author });
      saveFavorite(favorites);

      const existingCard = container.querySelector(`#${CSS.escape(quote.id)}`);
      if (!existingCard) addFavoriteCard(quote, container);
    }
  } else {
    favorites = favorites.filter(
      (q) => q.id.toString() !== quote.id.toString()
    );
    saveFavorite(favorites);
    removeCardOfFavorite(container, quote);
  }
}

// Настройка обработчиков (навешивает на container один общий listener)
export function setupFavoriteHandlers(favoritesContainer, favoriteBtn, quotes) {
  favoriteBtn.addEventListener('click', () => {
    const favorites = getFavorites();

    const quote = getRandomQuote();
    if (!quote) return;
    toggleFavorite(quote, favoritesContainer, favoriteBtn);
  });

  favoritesContainer.addEventListener('click', (event) => {
    handleDeleteClick(event, favoritesContainer, quotes, favoriteBtn);
  });
}

// Local Storage
export function getFavorites() {
  return JSON.parse(localStorage.getItem('favorites')) || [];
}

export function saveFavorite(favorites) {
  localStorage.setItem('favorites', JSON.stringify(favorites));
}

export function loadFavoriteOnStart(container, quotes) {
  const favorites = getFavorites();

  favorites.forEach(savedQuote => {
    const fullQuote = quotes.find(q => q.id.toString() === savedQuote.id.toString());

    if (fullQuote) {
      fullQuote.isFavorite = true;

      // ✅ Проверка на дубликаты
      const existingCard = container.querySelector(`#${CSS.escape(fullQuote.id)}`);
      if (!existingCard) {
        addFavoriteCard(fullQuote, container); // 💥 Используй addFavoriteCard вместо renderFavoriteQuote
      }
    }
  });
}


