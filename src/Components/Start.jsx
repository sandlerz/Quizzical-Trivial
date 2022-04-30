import getQuotes from '../services/getQuotes'
import { useEffect, useState } from 'react'

export default function Start({ start, difficulty, handleDifficulty }) {
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
      <p className="difficulty__tittle">Select Difficulty:</p>
      <div className="difficulty__container">
        <div className="difficulty__selector">
          <input
            className="difficulty__radioBtn"
            type="radio"
            id="easy"
            name="easy"
            value="easy"
            checked={difficulty === 'easy'}
            onChange={handleDifficulty}
          />
          <form className="difficulty__name" action="">
            Easy
          </form>
        </div>
        <div className="difficulty__selector">
          <input
            className="difficulty__radioBtn"
            type="radio"
            id="medium"
            name="medium"
            value="medium"
            checked={difficulty === 'medium'}
            onChange={handleDifficulty}
          />
          <form className="difficulty__name" action="">
            Medium
          </form>
        </div>
        <div className="difficulty__selector">
          <input
            className="difficulty__radioBtn"
            type="radio"
            id="hard"
            name="hard"
            value="hard"
            checked={difficulty === 'hard'}
            onChange={handleDifficulty}
          />
          <form className="difficulty__name" action="">
            Hard
          </form>
        </div>
      </div>
    </header>
  )
}
