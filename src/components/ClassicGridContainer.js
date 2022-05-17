import React, {useEffect, useState} from 'react'
import Grid from './Grid'
import Keypad from './Keypad'
import Modal from './Modal'
import useWordle from '../hooks/useWordle'

const MAX_TOTAL_TURNS = 5

const ClassicGridContainer = ({solution}) => {
    const {currentGuess, handleKeyUp, guesses, isCorrect, turn, usedKeys} = useWordle(solution)
    const [showModal, setShowModal] = useState(false)
    useEffect(() => {
        window.addEventListener('keyup', handleKeyUp)

        if(isCorrect || turn > MAX_TOTAL_TURNS){
            setTimeout(() => {
                setShowModal(true)
            }, 400)
            window.removeEventListener('keyup', handleKeyUp)
        }

        return () => window.removeEventListener('keyup', handleKeyUp)
    }, [handleKeyUp, isCorrect, turn])
    return (
        <div>
            <Grid solutionLength={solution.length} currentGuess={currentGuess} guesses={guesses} turn={turn}/>
            <Keypad usedKeys={usedKeys} />
            {showModal && <Modal guesses={guesses} isCorrect={isCorrect} turn={turn} solution={solution}/>}
        </div>
    )
}

export default ClassicGridContainer