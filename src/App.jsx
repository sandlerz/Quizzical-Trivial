import { useEffect, useState } from "react"
import getTriviaData from "./services/getTriviaData"

import "./scss/index.scss"
import Questions from "./Components/Questions"
import Start from "./Components/Start"
import Loading from "./Components/Loading"

function App() {
  const [getTrivia, setGetTrivia] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(false)
    const intervalId = setInterval(() => {
      setLoading(true)
    }, 1000)

    return () => clearInterval(intervalId)
  }, [getTrivia])

  const handleStart = () => {
    getTriviaData().then(questions => {
      setGetTrivia(questions)
    })
  }

  return (
    <main>
      <div className="bg__image img__top"></div>
      {getTrivia == false ? (
        <Start start={handleStart} />
      ) : !loading ? (
        <Loading />
      ) : (
        <Questions data={getTrivia} />
      )}
      <div className="bg__image img__bot"></div>
    </main>
  )
}

export default App
