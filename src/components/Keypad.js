import React, { useEffect, useState, useRef } from 'react'
import '../styles/keypad.scss'

const Keypad = ({usedKeys}) => {
    const [letters, setLetters] = useState(null)
    useEffect(()=>{
        fetch('http://localhost:5000/api/letters')
            .then(res => res.json())
            .then(data => {
                setLetters(data.keys)
            })
    }, [])

    const ref = useRef(null);

    const keyboardEvent = (key) => {
        ref &&
        ref.current?.dispatchEvent(
          new KeyboardEvent("keyup", {
            key: key,
            bubbles: true,
            cancelable: true,
          })
        );
    }


  return (
    <div className="keypad">
        {letters && letters.map((l => {
            const color = usedKeys[l.key]
            return (
                <button onClick={() => keyboardEvent(l.key)} disabled={color === 'grey'} className={`key ${color}`} key={l.key}>{l.key}</button>
            )
        }))}
        <button ref={ref} onClick={() => keyboardEvent('Backspace')} className={`key backspace`}>Backspace</button>
        <button onClick={() => keyboardEvent('Enter')} className={`key enter`}>Enter</button>
    </div>
  )
}

export default Keypad