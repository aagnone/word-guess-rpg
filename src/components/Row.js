import React from 'react'

const Row = ({guess, solutionLength, currentGuess}) => {

    if(guess) {
        return (
            <div className="row past">
                {guess.map((l, i) => {
                    return <div className={`cell ${l.color}`} key={i}>{l.key}</div>
                })}
            </div>
        )
    }

    if(currentGuess) {
        let letters = currentGuess.split('')
        return (
            <div className="row current">
                {letters.map((letter, i) => {
                    return <div key={i} className="filled cell">{letter}</div>
                })}
                {[...Array(solutionLength - letters.length)].map((_, i) => {
                    return <div key={i} className="cell"></div>
                })}
            </div>
        )
    }

    return (
            <div className='row'>
                {
                    [...Array(solutionLength)].map((el, i) => {
                        return <div key={i} className="cell"></div>
                    })
                }
            </div>
        )
    }

export default Row