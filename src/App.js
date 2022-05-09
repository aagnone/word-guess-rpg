import React, {useEffect, useState} from 'react'
import GameUI from './components/GameUI'
import './styles/global.scss'

// json-server ./data/db.json --port 3001 -- add to read me

const App = () => {
  const [solution, setSolution] = useState(null)
  useEffect(() => {
    fetch('http://localhost:5000/api/solutions5')
      .then(res => res.json())
      .then(data => {
        const randomSolution = data.solutions[Math.floor(Math.random() * data.solutions.length)]
        setSolution(randomSolution)
      })
    return
  }, [setSolution])
  
  return (
    <div>
      {solution && <GameUI solution={solution} />}
    </div>
  )
}

export default App