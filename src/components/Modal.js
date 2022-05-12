import React from 'react'
import '../styles/Modal.scss'

const Modal = ({isCorrect, turn, solution, guesses}) => {
  return (
    <div className='modal'>
        <div>
            <button>X</button>
        </div>
        <div className="content">
            <p>Total turns: </p>
            <p>Experience Gained: </p>
            <p>Stats: </p>       
        </div>
    </div>
  )
}
export default Modal