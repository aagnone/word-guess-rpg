import {useState, useContext} from 'react'
import { StoryContext } from '../context/StoryContext'
import { UserContext } from '../context/UserContext'

// move to constants folder when necessary
const MAX_NUM_GUESSES = 6

const useStory = (solution) => {
    const {setSolved, setSolvedWords} = useContext(StoryContext)
    const {awardCurrency, updateSolveRate} = useContext(UserContext)
    const [turn, setTurn] = useState(0)
    const [currentGuess, setCurrentGuess] = useState('')
    const [guesses, setGuesses] = useState([...Array(MAX_NUM_GUESSES)])
    const [history, setHistory] = useState([])
    const [isCorrect, setIsCorrect] = useState(false)
    const [usedKeys, setUsedKeys] = useState({})
    // const [totalGuess, setTotalGuesses] = useState(0)

    const formatGuess = () => {
        let solutionArray = [...solution]
        let formattedGuess = [...currentGuess].map(letter => {
            return {key: letter, color: 'grey'}
        })

        formattedGuess.forEach((letter, index) => {
            if(solutionArray[index] === letter.key) {
                formattedGuess[index].color = 'green'
                solutionArray[index] = null
            }
        })

        formattedGuess.forEach((letter, index) => {
            if(solutionArray.includes(letter.key) && letter.color !== 'green') {
                formattedGuess[index].color = 'yellow'
                solutionArray[solutionArray.indexOf(letter.key)] = null
            }
        })

        return formattedGuess
    }

    const addNewGuess = (userGuess) => {
        if(currentGuess === solution) {
            setIsCorrect(true)
            setSolved(prev => (prev + 1))
            setSolvedWords(prev => [...prev, currentGuess])
            awardCurrency(turn)
            updateSolveRate(turn)
        } 

        setGuesses(prevGuesses => {
            let newGuesses = [...prevGuesses]
            newGuesses[turn] = userGuess
            return newGuesses
        })
        setHistory(prevHistory => [...prevHistory, currentGuess])
        setTurn(prev => prev + 1)
        setUsedKeys(prevUsedKeys => {
            let newKeys = {...prevUsedKeys}

            userGuess.forEach(l => {
                const currentColor = newKeys[l.key]

                if(l.color === 'green'){
                    newKeys[l.key] = 'green'
                    return
                }
                if(l.color === 'yellow' && currentColor !== 'green'){
                    newKeys[l.key] = 'yellow'
                    return
                }
                if(l.color === 'grey' && currentColor !== 'green' && currentColor !== 'yellow') {
                    newKeys[l.key] = 'grey'
                    return
                }
            })
            return newKeys
        })
        setCurrentGuess('')
    }

    const checkValid = async () => {
        let isValid 
        try {
            await fetch(`http://localhost:5000/api/viable${solution.length}`)
                .then(res => res.json())
                .then(json => {
                    isValid = JSON.stringify(json.viable).includes(currentGuess)
                })
        } catch (e) {
            console.log(e)
            throw e
        }

        return isValid
    }

    const handleKeyUp = ({key}) => {
        if (key === 'Enter') {

            checkValid()
                .then(res => {
                    if (!res) {
                        console.log('Not in word list')
                        return
                    }
                    if (turn > 5 ) {
                        console.log('you used all your guesses')
                        return
                    }
        
                    if (history.includes(currentGuess)){
                        console.log('you have tried this word already')
                        return
                    }
        
                    if (currentGuess.length !== solution.length) {
                        console.log(`word must be ${solution.length} characters long`)
                        return
                    }
                    const enteredGuessFormatted = formatGuess()
                    addNewGuess(enteredGuessFormatted)
                })
                .catch(e => {
                    console.log(e)
                })

        }

        if(key === 'Backspace' && currentGuess.length > 0) {
            setCurrentGuess(prev => prev.slice(0, -1))
        }
        ((/^[A-Za-z]$/).test(key) && currentGuess.length < solution.length) && setCurrentGuess(prev => (prev+key))
    }

    return {turn, currentGuess, guesses, isCorrect, usedKeys, handleKeyUp}
}

export default useStory