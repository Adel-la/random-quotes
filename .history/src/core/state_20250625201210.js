import { chooseRandomQuote } from '../handlers/utils.js';
import quotes from '../data/quotes.js';

let currentQuote = null;

// Функция для получения текущей цитаты
export function getRandomQuote() {
  if (!currentQuote) {
    currentQuote = chooseRandomQuote(quotes);
  }
  return currentQuote;
}

// Устанавливаем текущую цитату
export function setRandomQuote(quote) {
  currentQuote = quote;
}
