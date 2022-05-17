import React, {useContext, useEffect} from 'react'
import { UserContext } from '../context/UserContext'
import useStory from '../hooks/useStory'
import Grid from './Grid'
import Keypad from './Keypad'

export const StoryGridContainer = ({solution, current, index}) => {
    const {currentGuess, handleKeyUp, guesses, turn, isCorrect, usedKeys} = useStory(solution)
    const {updateSolveRate} = useContext(UserContext)

    useEffect(() => {
        window.addEventListener('keyup', handleKeyUp)
        if(current !== index || isCorrect || turn > 5) window.removeEventListener('keyup', handleKeyUp)

        if(turn > 5) {
            updateSolveRate('fail')
        }

        return () => window.removeEventListener('keyup', handleKeyUp)
    }, [handleKeyUp, current, index, isCorrect, turn, updateSolveRate])

    return (
        <div className={current !== index ? 'sr-only' : 'grid-container'}>
            <Grid solutionLength={solution.length} currentGuess={currentGuess} guesses={guesses} turn={turn}/>
            <Keypad usedKeys={usedKeys} />
        </div>
    )
}
