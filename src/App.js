import React, {useEffect, useState} from 'react'
import GameUI from './components/GameUI'
import './styles/global.scss'

// json-server ./data/db.json --port 3001 -- add to read me

// const DEV_MODE = true

const App = ({mode}) => {
  const [solution, setSolution] = useState(null)
  useEffect(() => {
    // change this when story list is complete
    const url = mode === 'Classic' ? 'http://localhost:5000/api/solutions5' : 'http://localhost:5000/api/solutions5'
    fetch(url)
      .then(res => res.json())
      .then(data => {
        const randomSolution = data.solutions[Math.floor(Math.random() * data.solutions.length)]
        setSolution(randomSolution)
      })
    return
  }, [setSolution, mode])

  // remove right click
  // useEffect(() => {
  //   DEV_MODE && document.addEventListener('contextmenu', e => e.preventDefault());
  //   return document.addEventListener('contextmenu', e => e.preventDefault());
  // }, [])
  
  return (
    <div className="gameContainer">
      {solution && <GameUI mode={mode} solution={solution} />}
    </div>
  )
}

export default App