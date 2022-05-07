import React, {useEffect, useState} from 'react'
import './index.css'

const App = () => {
  const [solution, setSolution] = useState(null)
  useEffect(() => {
    fetch('http://localhost:3001/solutions')
      .then(res => res.json())
      .then(json => {
        const randomSolution = json[Math.floor(Math.random() * json.length)]
        setSolution(randomSolution.word)
      })
    return
  }, [setSolution])
  
  return (
    <div>
      Random word {solution && <h1>{solution}</h1>}
    </div>
  )
}

export default App