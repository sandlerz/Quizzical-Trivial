import React from "react"

export default function Questions({ questions }) {
  const quest = questions.map(quest => {
    const { question, correct_answer, incorrect_answers } = quest
    return (
      <div key={question}>
        <h3 dangerouslySetInnerHTML={{ __html: question }} />
        <ul>
          <li dangerouslySetInnerHTML={{ __html: incorrect_answers[0] }} />
          <li dangerouslySetInnerHTML={{ __html: incorrect_answers[1] }} />
          <li dangerouslySetInnerHTML={{ __html: incorrect_answers[2] }} />
        </ul>
        <p dangerouslySetInnerHTML={{ __html: correct_answer }} />
      </div>
    )
  })
  return <div>{quest}</div>
}
