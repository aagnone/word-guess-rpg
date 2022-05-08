import React from 'react'
import Row from './Row'

const Grid = ({currentGuess, guesses, turn, solutionLength}) => {
  return (
    <div>
        {
            guesses.map((g, i) => {
                if(turn === i) {
                    return <Row solutionLength={solutionLength} key={i} currentGuess={currentGuess} />
                }
                return <Row solutionLength={solutionLength} guess={g} key={i} />
            })
        }
    </div>
  )
}

export default Grid