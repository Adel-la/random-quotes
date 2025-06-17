//Adding card 
export function addFavoriteCard(quoteObj, container) {
  const card = document.createElement('div');
  card.classList.add('favorite-card');

  card.innerHTML = `
      <button class="delete-btn">🗑</button>
      <p class="favorite-quote">"${quoteObj.quote}"</p>
      <span class="quote-author">– ${quoteObj.author}</span>
    `;

  container.appendChild(card);
}


// Если убрали из избранного, удаляем карточку
// Ищем карточку с такой цитатой и удаляем её
export function removeCardOfFavorite(quoteText, container) {
  const cards = container.querySelectorAll('.favorite-card');
  cards.forEach((card) => {
    const text = card
      .querySelector('.favorite-quote')
      .textContent.replace(/"/g, '')
      .trim();
    if (text === quoteText) {
      card.remove();
    }
  });
}

export function updateFavoriteButton(isFavorite, button) {
  button.textContent = isFavorite ? '★' : '☆';
}


// Делегирование кликов по кнопкам удаления в контейнере избранных
export function handleDeleteClick(
  event,
  container,
  quotes,
  currentQuote,
  favoriteButton
) {
  if (!event.target.classList.contains('delete-btn')) return;

  const card = event.target.closest('.favorite-card');
  if (!card) return;

  const quoteText = card
    .querySelector('.favorite-quote')
    .textContent.replace(/"/g, '')
    .trim();
  const quoteObj = quotes.find((q) => q.quote === quoteText);
  if (quoteObj) quoteObj.isFavorite = false;

  if (currentQuote && currentQuote.quote === quoteText) {
    updateFavoriteButton(false, favoriteButton);
    currentQuote.isFavorite = false;
  }

  card.remove();
}
