import React, { useRef } from 'react'
import '../styles/keypad.scss'

const KEYS = {
  "rowOne": [
    {"key": "q"},
    {"key": "w"},
    {"key": "e"},
    {"key": "r"},
    {"key": "t"},
    {"key": "y"},
    {"key": "u"},
    {"key": "i"},
    {"key": "o"},
    {"key": "p"}
  ],
  "rowTwo": [
    {"key": "a"},
    {"key": "s"},
    {"key": "d"},
    {"key": "f"},
    {"key": "g"},
    {"key": "h"},
    {"key": "j"},
    {"key": "k"},
    {"key": "l"}
  ], 
  "rowThree": [
    {"key": "z"},
    {"key": "x"},
    {"key": "c"},
    {"key": "v"},
    {"key": "b"},
    {"key": "n"},
    {"key": "m"}
  ]
}

const Keypad = ({usedKeys}) => {
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
      <div className="keyrow keypad_one">
        {KEYS.rowOne.map((l => {
              const color = usedKeys[l.key]
              return (
                  <button onClick={() => keyboardEvent(l.key)} disabled={color === 'grey'} className={`key ${color}`} key={l.key}>{l.key}</button>
              )
          }))}
      </div>
      <div className="keyrow keypad_two">
        {KEYS.rowTwo.map((l => {
              const color = usedKeys[l.key]
              return (
                  <button onClick={() => keyboardEvent(l.key)} disabled={color === 'grey'} className={`key ${color}`} key={l.key}>{l.key}</button>
              )
          }))}
      </div>
      <div className="keyrow keypad_three">
        <button onClick={() => keyboardEvent('Enter')} className={`key enter`}>Enter</button>
        {KEYS.rowThree.map((l => {
              const color = usedKeys[l.key]
              return (
                  <button onClick={() => keyboardEvent(l.key)} disabled={color === 'grey'} className={`key ${color}`} key={l.key}>{l.key}</button>
              )
          }))}
          <button ref={ref} onClick={() => keyboardEvent('Backspace')} className={`key backspace`}>&#9003;</button>
      </div>
    </div>
  )
}

export default Keypad