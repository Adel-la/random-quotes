import quotes from './src/data/quotes.js';
import { generateAndDisplayQuote } from './src/handlers/quote.js';
import {
  generateBtn,
} from './src/ui/dom.js';
import { hoverButton } from './src/ui/hoverButton.js';
import { initParticles } from './src/ui/particles.js';

window.addEventListener('DOMContentLoaded', () => {

  // Показать первую цитату сразу при загрузке страницы
  generateAndDisplayQuote(quotes);
  
  // Кнопка "Сгенерировать цитату"
  generateBtn.addEventListener('click', () => {
    generateAndDisplayQuote(quotes);
  });
  
  hoverButton(generateBtn)

});
