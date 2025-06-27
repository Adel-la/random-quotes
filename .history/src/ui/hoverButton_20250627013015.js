import { generateBtn } from "./dom";

const originalText = generateBtn.textContent
function hoverButton(generateBtn){
  generateBtn.addEventListener('mouseenter', () => {
    generateBtn.textContent = 'Давай вдохновим тебя'
  })
  
  generateBtn.addEventListener('mouseleave', () => {
    generateBtn.textContent = originalText
  })
}