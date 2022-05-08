import {useState} from 'react'

const useWordle = (solution) => {
    const [turn, setTurn] = useState(0)
    const [currentGuess, setCurrentGuess] = useState('')
    const [guesses, setGuesses] = useState([])
    const [history, setHistory] = useState([])
    const [isCorrect, setIsCorrect] = useState(false)

    const formatGuess = () => {
        // ...solution is a spread function. It takes each individual character and "spreads" it into individual elements in an array
        // ie if soultion = test, [...solution] = ['t', 'e', 's', 't']
        let solutionArray = [...solution]

        // this block spreads the current guess into an array. Then it converts this array into a NEW array using the map method. 
        // this new array turns ['t', 'e', 's', 't'] into an array of objects defined in the return statement
        // therefore formattedGuess would be [{key: 't', color: 'grey'}, {key: 'e', color: 'grey'}, {key: 's', color: 'grey'}, {key: 't', color: 'grey'},]
        let formattedGuess = [...currentGuess].map(letter => {
            return {key: letter, color: 'grey'}
        })

        // find any letters that should be green instead of grey
        formattedGuess.forEach((letter, index) => {
            if(solutionArray[index] === letter.key) {
                formattedGuess[index].color = 'green'
                solutionArray[index] = null
            }
        })

        // find any letters that should be yellow
        formattedGuess.forEach((letter, index) => {
            if(solutionArray.includes(letter.key) && letter.color !== 'green') {
                formattedGuess[index].color = 'yellow'
                solutionArray[solutionArray.indexOf(letter.key)] = null
            }
        })

        return formattedGuess
    }

    const addNewGuess = () => {

    }

    // {key} is a DESTRUCTURED (javascript vocab word. a good google search topic) event which is passed into a keyup listener. so what this basically says is:
    /*
        const handleKeyUp(e) => {
            const key = e.key
        }
    */
    const handleKeyUp = ({key}) => {
        if (key === 'Enter') {
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
            console.log(solution, enteredGuessFormatted)
        }

        if(key === 'Backspace' && currentGuess.length > 0) {
            // prev => prev.slice(0, -1) is short hand for:
            /*
                setCurrentGuess((prev) => {
                    return prev.slice(0, -1)
                })
            */
            setCurrentGuess(prev => prev.slice(0, -1))
        }

        // this is javascript short hand that is nearly identical to the if check above. only using a declaration and && instead of if() and a { }
        // I think it's cleaner and I like it. Of course the comments take a bit away from the 'cleanness' but I'm only explaining it this once.
        /* 
           regex test on key to make sure that backspace, shift, lControl etc isn't added to the the currentGuess state.  This could/should be
           expanded should other characters be allowed. Also checking if the guess length matches the solution length. Not putting a set number 
           here because I'm not certain that I'm limiting this 'game' to 5 letters.
        */
        ((/^[A-Za-z]$/).test(key) && currentGuess.length < solution.length) && setCurrentGuess(prev => (prev+key))
    }

    return {turn, currentGuess, guesses, isCorrect, handleKeyUp}
}

export default useWordle