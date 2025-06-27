export function hoverButton(generateBtn){
  const originalText = generateBtn.textContent
  generateBtn.addEventListener('mouseenter', () => {
    generateBtn.textContent = "let's inspire you"
  })і
  
  generateBtn.addEventListener('mouseleave', () => {
    generateBtn.textContent = originalText
  })
}