// Генерация уникального 8-символьного hex ID (буквы и цифры)
 function generateHexId() {
  return Math.floor(Math.random() * 0xffffffff)
    .toString(16)
    .padStart(8, '0');
}

export function setQuoteId(quotes){
  return quotes.forEach(quote => {
    quote.idgenerateHexId(),
    ...quote    
  })
}

// Функция выбора случайной цитаты из массива
export function chooseRandomQuote(quotes) {
  const index = Math.floor(Math.random() * quotes.length);
  return quotes[index];
}
