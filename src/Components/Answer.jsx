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
      style = { backgroundColor: "green" }
    } else {
      style = { backgroundColor: "red" }
    }
  }

  if (check) {
    button = (
      <button
        dangerouslySetInnerHTML={{ __html: answer }}
        className={
          answerState[question] === answer
            ? "answers-button--select"
            : "answers-button"
        }
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
