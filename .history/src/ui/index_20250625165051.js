import { updateFavoriteButton } from '../handlers/favorites.js';

// Функция для отображения цитаты и автора на странице
export function showQuote(quote, quoteElement, authorElement, favoriteBtn) {
  if (!quote) return;

  const { text, author, isFavorite } = quote;

  quoteElement.textContent = text;
  authorElement.textContent = author ? `– ${author}` : '– Unknown';

  updateFavoriteButton(isFavorite, favoriteBtn);
}
