import { useEffect, useState } from 'react'
import getTriviaData from './services/getTriviaData'

import './scss/index.scss'
import Questions from './Components/Questions'
import Start from './Components/Start'
import Loading from './Components/Loading'

function App() {
  const [getTrivia, setGetTrivia] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const intervalId = setInterval(() => {
      setLoading(false)
    }, 1000)

    return () => clearInterval(intervalId)
  }, [getTrivia])

  const handleStart = () => {
    getTriviaData().then(questions => {
      setGetTrivia(questions)
    })
  }

  const handleBack = () => {
    setGetTrivia([])
  }

  if (loading)
    return (
      <main>
        <div className="bg__image img__top"></div>
        <Loading />
        <div className="bg__image img__bot"></div>
      </main>
    )

  return (
    <main>
      <div className="bg__image img__top"></div>
      {getTrivia == false ? (
        <Start start={handleStart} />
      ) : (
        <Questions data={getTrivia} start={handleStart} back={handleBack} />
      )}
      <div className="bg__image img__bot"></div>
    </main>
  )
}

export default App
