import { generateBtn } from "./dom";

const originalText = generateBtn.textContent

generateBtn.addEventListener('mouseenter', () => {
  generateBtn.textContent = 'Давай вдохновим тебя'
})

generateBtn.addEventListener('mouseleave', () => {
  generateBtn.textContent = originalText
})