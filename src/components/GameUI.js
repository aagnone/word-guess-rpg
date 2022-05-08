import React, { useEffect } from 'react'
import useWordle from '../hooks/useWordle'

const GameUI = ({solution}) => {
    const {currentGuess, handleKeyUp, guesses, isCorrect, turn} = useWordle(solution)

    useEffect(() => {
        window.addEventListener('keyup', handleKeyUp)

        return () => window.removeEventListener('keyup', handleKeyUp)
    }, [handleKeyUp])

    useEffect(() => {
        console.log(guesses, turn, isCorrect)
    }, [guesses, turn, isCorrect])

    return (
        <div>
            <div>current guess - {currentGuess}</div>
        </div>
    )
}

export default GameUI