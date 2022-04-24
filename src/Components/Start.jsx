export default function Start({ start }) {
  return (
    <header className="Start">
      <h1 className="Start__tittle">Quizzical</h1>
      <p className="Start__description ">Some description if needed</p>
      <button className="primaryButton" onClick={start}>
        Start Quiz
      </button>
    </header>
  )
}
