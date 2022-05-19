import React, {createContext, useState, useEffect} from 'react'

export const ClassicContext = createContext(null)

const ClassicContextProvider = ({children}) => {
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
          <ClassicContext.Provider value={{solution}}>
              {children}
          </ClassicContext.Provider>
      )
}

export default ClassicContextProvider