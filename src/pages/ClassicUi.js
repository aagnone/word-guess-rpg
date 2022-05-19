import React, {useContext, useEffect, useState} from 'react'
import Grid from '../components/Grid'
import Keypad from '../components/Keypad'
import Modal from '../components/Modal'
import useWordle from '../hooks/useWordle'
import { ClassicContext } from '../context/ClassicContext'
import TopBar from '../components/TopBar'

const MAX_TOTAL_TURNS = 5

const ClassicUi = () => {
    const {solution} = useContext(ClassicContext)
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

    if(!solution){
        return <div><h1>Loading...</h1></div>
    }

    return (
        <>
            <TopBar />
            <Grid solutionLength={solution.length} currentGuess={currentGuess} guesses={guesses} turn={turn}/>
            <Keypad usedKeys={usedKeys} />
            {showModal && <Modal guesses={guesses} isCorrect={isCorrect} turn={turn} solution={solution}/>}
        </>
    )
}

export default ClassicUi