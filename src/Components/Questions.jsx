import { useState } from 'react'
import Answer from './Answer'

export default function Questions({ data, start, back }) {
  const [answerState, setAnswerState] = useState({
    [data[0].question]: '',
    [data[1].question]: '',
    [data[2].question]: '',
    [data[3].question]: '',
  })
  const [check, setCheck] = useState(false)
  const [correctAnswers, setCorrectAnswers] = useState(0)

  const handleClick = (answers, question) => {
    setAnswerState(prev => ({
      ...prev,
      [question]: answers,
    }))
  }

  const questions = data.map((quest, index) => {
    return (
      <div
        key={quest.question}
        className={`question__container question__container--${index}`}
      >
        <h1 dangerouslySetInnerHTML={{ __html: quest.question }} />
        <div className="answers__container">
          {quest.answers.map(singleAnswer => {
            return (
              <Answer
                key={singleAnswer}
                answer={singleAnswer}
                question={quest.question}
                onClick={handleClick}
                answerState={answerState}
                correctAnswers={quest.correct_answer}
                check={check}
              />
            )
          })}
        </div>
      </div>
    )
  })

  const handleEmpty = () => {
    let x = 0
    for (let key in answerState) {
      if (answerState[key] === '') {
        return alert('responds all questions')
      }
      if (data[x].correct_answer === answerState[key]) {
        setCorrectAnswers(prev => prev + 1)
      }
      x += 1
    }

    for (let x = 0; x < 5; x++) {}
    setCheck(true)
  }

  return (
    <div className="form_container">
      {questions}
      {!check ? (
        <div className="btn_container">
          <button className="primaryButton primaryButton--check" onClick={back}>
            Back
          </button>
          <button
            className="primaryButton primaryButton--check"
            onClick={handleEmpty}
          >
            Check answers
          </button>
        </div>
      ) : (
        <div className="footer">
          <h1>You Scored {correctAnswers}/5 correct answer</h1>
          <button
            className="primaryButton primaryButton--playAgain"
            onClick={start}
          >
            Start Quiz
          </button>
        </div>
      )}
    </div>
  )
}
