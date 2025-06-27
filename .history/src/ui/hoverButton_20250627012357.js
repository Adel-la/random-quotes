import { favoriteBtn } from "./dom";

const originalText = favoriteBtn.textContent

favoriteBtn.addEventListener('mouseenter', () => {
  favoriteBtn.textContent = 'Давай вдохновим тебя'
})

favoriteBtn.addEventListener('mouseleave')