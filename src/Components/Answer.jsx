export default function Answer({
  answer,
  onClick,
  answerState,
  correctAnswers,
  question,
  check,
  correctCount,
}) {
  let button
  let style = null

  if (answerState[question] === answer) {
    if (answer === correctAnswers) {
      style = { backgroundColor: "#94D7A2", opacity: "1" }
    } else {
      style = { backgroundColor: "#F8BCBC" }
    }
  }

  if (check) {
    button = (
      <button
        dangerouslySetInnerHTML={{ __html: answer }}
        className="answers-button--unselect"
        style={style}
      />
    )
  } else {
    button = (
      <button
        dangerouslySetInnerHTML={{ __html: answer }}
        onClick={() => onClick(answer, question)}
        className={
          answerState[question] === answer
            ? "answers-button--select"
            : "answers-button"
        }
      />
    )
  }

  return <>{button}</>
}
