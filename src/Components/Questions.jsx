import { useState } from "react"
import Answer from "./Answer"
import Start from "./Start"

export default function Questions({ data, start }) {
  const [answerState, setAnswerState] = useState({
    [data[0].question]: "",
    [data[1].question]: "",
    [data[2].question]: "",
    [data[3].question]: "",
  })
  const [check, setCheck] = useState(false)
  const [correctAnswers, setCorrectAnswers] = useState(0)

  const handleClick = (answers, question) => {
    setAnswerState(prev => ({
      ...prev,
      [question]: answers,
    }))
  }

  const questions = data.map(quest => {
    return (
      <div key={quest.question} className="questions__container">
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
                correctCount={setCorrectAnswers}
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
      if (answerState[key] === "") {
        return alert("responds all questions")
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
        <button
          className="primaryButton primaryButton--check"
          onClick={handleEmpty}
        >
          Check answers
        </button>
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
