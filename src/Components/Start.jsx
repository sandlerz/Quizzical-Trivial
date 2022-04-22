export default function Start({start}) {
  return (
    <main>
      <header className="Start">
        <h1 className="Start__tittle">Quzzical</h1>
        <p className="Start__description ">Some description if needed</p>
        <button className="primaryButton Start__btn" onClick={start}>Start Quiz</button>
      </header>
    </main>
  )
}
