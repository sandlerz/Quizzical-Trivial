const quotesURL = 'https://type.fit/api/quotes'

export default function getQuotes() {
  return fetch(quotesURL)
    .then(res => res.json())
    .then(quotes => {
      return randomQuote(quotes)
    })
}

const randomQuote = (quotes = []) => {
  let ranQuote = Math.floor(Math.random() * quotes.length)
  return quotes[ranQuote]
}
