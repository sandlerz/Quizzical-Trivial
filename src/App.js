import { useEffect, useState } from "react"
import getTriviaData from "./services/getTriviaData"

import "./scss/index.scss"
import Questions from "./Components/Questions"
import Start from "./Components/Start"

function App() {
  const [getTrivia, setGetTrivia] = useState([])
  const [loading, setLoading] = useState(true)

  // useEffect(() => {
  //   getTriviaData().then(questions => setGetTrivia(questions))
  // }, [])

  useEffect(() => {
    const intervalId = setInterval(() => {
      setLoading(false)
    }, 1000);
    return clearInterval(intervalId)
  },[getTrivia])

  const handleStart = () => {
    getTriviaData().then(questions => {
      setGetTrivia(questions)
    })
  }

  console.log(loading)
  if (getTrivia == false) return <Start start={handleStart}/>
  if (loading) return <p>loading</p>

  return (
    <main>
      Quizzical trivia
      <Questions questions={getTrivia} />
    </main>
  )
}

export default App
