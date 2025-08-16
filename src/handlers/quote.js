import { chooseRandomQuote } from './utils.js';
import { setRandomQuote } from '../core/state.js';
import { showQuote } from '../ui/index.js';
import { quoteElement, authorElement, favoriteBtn } from '../ui/dom.js';

export function generateAndDisplayQuote(quotes) {
  const quote = chooseRandomQuote(quotes);
  setRandomQuote(quote); // Устанавливаем текущую
  showQuote(quote, quoteElement, authorElement, favoriteBtn); // Показываем
}
