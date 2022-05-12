import React, {useEffect} from 'react'
import useStory from '../hooks/useStory'
import Grid from './Grid'
import Keypad from './Keypad'

export const StoryGridContainer = ({solution, current, index, isDotted}) => {
    const {currentGuess, handleKeyUp, guesses, turn, isCorrect, usedKeys} = useStory(solution)

    useEffect(() => {
        window.addEventListener('keyup', handleKeyUp)
        if(current !== index || isCorrect || turn > 5) window.removeEventListener('keyup', handleKeyUp)

        return () => window.removeEventListener('keyup', handleKeyUp)
    }, [handleKeyUp, current, index, isCorrect, turn])

    return (
        <div className={current !== index ? 'sr-only' : 'grid-container'}>
            <Grid solutionLength={solution.length} currentGuess={currentGuess} guesses={guesses} turn={turn}/>
            <Keypad usedKeys={usedKeys} />
        </div>
    )
}
