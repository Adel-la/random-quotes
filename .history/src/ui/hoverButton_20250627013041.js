import { generateBtn } from "./dom";

export function hoverButton(generateBtn){
  const originalText = generateBtn.textContent
  generateBtn.addEventListener('mouseenter', () => {
    generateBtn.textContent = 'Давай вдохновим тебя'
  })
  
  generateBtn.addEventListener('mouseleave', () => {
    generateBtn.textContent = originalText
  })
}