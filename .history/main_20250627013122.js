import quotes from './src/data/quotes.js';
import { generateAndDisplayQuote } from './src/handlers/quote.js';
import {
  generateBtn,
} from './src/ui/dom.js';
import



// Показать первую цитату сразу при загрузке страницы
generateAndDisplayQuote(quotes);

// Кнопка "Сгенерировать цитату"
generateBtn.addEventListener('click', () => {
  generateAndDisplayQuote(quotes);
});

