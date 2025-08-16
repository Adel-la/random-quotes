import quotes from './src/data/quotes.js';
import { generateAndDisplayQuote } from './src/handlers/quote.js';
import { favoritesContainer, generateBtn, favoriteBtn } from './src/ui/dom.js';
import { renderFavoriteQuote } from './src/ui/index.js';
import { getFavorites, setupFavoriteHandlers } from './src/handlers/favorites.js';
import { hoverButton } from './src/ui/hoverButton.js';
import { initParticles } from './src/ui/particles.js';

window.addEventListener('DOMContentLoaded', () => {
  const favorites = getFavorites();
  favorites.forEach(quote => renderFavoriteQuote(quote));

  generateAndDisplayQuote(quotes);

  setupFavoriteHandlers(favoritesContainer, favoriteBtn, quotes);

  generateBtn.addEventListener('click', () => generateAndDisplayQuote(quotes));
  hoverButton(generateBtn);
  initParticles();
});

