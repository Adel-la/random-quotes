import { chooseRandomQuote } from './utils.js';
import { setRandomQuote } from '../core/state.js';
import { showQuote } from '../ui/index.js';
import { quoteElement, authorElement, favoriteBtn } from '../ui/dom.js';

// Функция генерации и отображения случайной цитаты
export function generateAndDisplayQuote(quotes) {
  const quote = chooseRandomQuote(quotes);
  setRandomQuote(quote);
  showQuote(quote, quoteElement, authorElement, favoriteBtn);
}

