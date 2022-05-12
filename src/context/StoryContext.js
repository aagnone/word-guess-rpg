import React, {createContext, useState} from 'react'

export const StoryContext = createContext(null)

export const StoryContextProvider = ({children}) => {
    const [solved, setSolved] = useState(0)
    const [solvedWords, setSolvedWords] = useState([])
    const [totalSolutions, setTotalSolutions]  = useState(0)
    return <StoryContext.Provider value={{solved, setSolved, solvedWords, setSolvedWords, totalSolutions, setTotalSolutions}}>{children}</StoryContext.Provider>
}
export default StoryContextProvider