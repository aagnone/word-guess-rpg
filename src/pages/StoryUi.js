import React, {useState, useEffect, useContext} from 'react'
import '../styles/gameBoard.scss'
import { StoryGridContainer } from '../components/StoryGridContainer'
import { StoryContext } from '../context/StoryContext'
import replaceFromString from '../helpFunctions/replaceFromString'
import Highlighter from "react-highlight-words"
import { UserContext } from '../context/UserContext'

const StoryGrid = () => {
    const [newSolutions, setNewSolutions] = useState([])
    const [clueText, setClueText] = useState('')
    const article = "Simplicity requires a two-step process. First, we must invest time and energy to discover what stirs us as human beings, what makes our hearts sing, and what brings us joy. Then, we must proceed to create the life that reflects the unique people we truly are. This is the heart and soul of simplicity."
    const allASCII = [...Array(95).keys()].map(i => String.fromCharCode(i+32))
    const [currentSolve, setCurrentSolve] = useState(0)
    const {solved, solvedWords, totalSolutions, setTotalSolutions} = useContext(StoryContext)
    const {userEquipment} = useContext(UserContext)

    const removeSolutions = async articleWords => {
        let articleWordArray = articleWords.split(' ')
        let fiveLetter = articleWordArray.filter(el => el.length === 5)
        let newSolutionsTemp = []
        let removedArticle

        try {
            await fetch('http://localhost:5000/api/solutions5')
            .then(res => res.json())
            .then(data => {
                fiveLetter.forEach(el => {
                    if(JSON.stringify(data.solutions).includes(el)) {
                        !newSolutionsTemp.includes(el) && newSolutionsTemp.push(el)
                    }
                })
                setNewSolutions(newSolutionsTemp)
                setTotalSolutions(newSolutionsTemp.length)
                let toRemove = new Set(solvedWords)
                const difference = newSolutionsTemp.filter( x => !toRemove.has(x) );
                removedArticle = replaceFromString(difference, article)
            })
        } catch (e) {
            console.log(e)
            throw e
        }
        return removedArticle
    }

    const jumbleWords = () => {
        removeSolutions(article).then(data => {
            let jumbledArticle = data.split(' ').map((word, i) => {
                let jumbledWord
                if(word === '_____' || (solved && i < data.split(' ').indexOf(solvedWords[solved - 1]) + 1)) return word
                jumbledWord = word.split('').map(() => {
                    return allASCII[Math.floor(Math.random() * allASCII.length)]
                })
                return jumbledWord.join('')
            })
            setClueText(jumbledArticle.join(' '))
        })
    }

    useEffect(() => {
      if(solved > 0 && solved === totalSolutions){
        setClueText(article)
        return
      } 
      jumbleWords()
      return
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [solved])
    
    return (
        <div className="story-grid">
            <div className="article-clue">
                <p>
                    {
                        solved > 0 ? 
                            <Highlighter 
                                highlightClassName='highlight'
                                searchWords={solvedWords}
                                autoEscape={true}
                                textToHighlight={clueText}
                            />
                        :
                        clueText
                    }
                </p>
            </div>
            <div className="solve-block">
                <div className="solveButtonsContainer">
                    <button className={`${currentSolve === 0 && 'active'} solveButton`} onClick={() => setCurrentSolve(0)}><p>Gear</p></button>
                    {newSolutions.map((el, i) => {
                        const text = solvedWords.includes(el) ? el : `${i + 1}:_____`
                        return (
                                <button 
                                    key={`button${i}`} 
                                    onClick={() => setCurrentSolve(currentSolve === i + 1 ? 0 : i + 1)}
                                    className={`solveButton ${solvedWords.includes(el) ? 'green' : ''} ${currentSolve === i + 1 ? 'active' : 'inactive'}`}
                                >
                                    <p>{text}</p>
                                </button>
                        )
                    })}
                </div>
                <div className='grid-container'>
                    {currentSolve === 0 && <div><h1>Gear</h1><p>{userEquipment.length > 0 ? 'you have equipment' : 'Spend Currency to purchase gear to help your solve'}</p></div>}
                    {newSolutions.map((el, i) => <StoryGridContainer isDotted={true} current={currentSolve} index={i + 1} key={`grid${i}`} solution={el} />)}
                </div>
            </div>
        </div>
    )
}
export default StoryGrid