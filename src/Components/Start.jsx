import getQuotes from '../services/getQuotes'
import { useEffect, useState } from 'react'

export default function Start({ start }) {
  const [dataQuotes, setDataQuotes] = useState([])
  useEffect(() => {
    getQuotes().then(data => setDataQuotes(data))
  }, [])

  return (
    <header className="Start">
      <h1 className="Start__tittle">Quizzical</h1>
      <div className="quote">
        <p className="quote__text">"{dataQuotes.text}"</p>
        <p className="quote__author">- {dataQuotes.author}</p>
      </div>
      <button className="primaryButton Start__button" onClick={start}>
        Start Quiz
      </button>
    </header>
  )
}
