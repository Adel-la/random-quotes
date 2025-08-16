import { updateFavoriteButton, handleDeleteClick } from '../handlers/favorites.js';
import quotes from '../data/quotes.js';
import { favoriteBtn, favoritesContainer } from './dom.js';

// Показ основной цитаты
export function showQuote(quote, quoteElement, authorElement, favoriteBtn) {
  if (!quote) return;
  const { text, author, isFavorite } = quote;
  quoteElement.textContent = text;
  authorElement.textContent = author ? ` ${author}` : ' Unknown';
  updateFavoriteButton(isFavorite, favoriteBtn);
}

// Создание карточки из избранного
export function renderFavoriteQuote(quote) {
  const card = document.createElement('div');
  card.id = quote.id;
  card.classList.add('favorite-card');

  card.innerHTML = `
    <button class="delete-btn">🗑</button>
    <p class="favorite-quote">${quote.text}</p>
    <span class="quote-author">– ${quote.author}</span>
  `;

  favoritesContainer.appendChild(card);
}