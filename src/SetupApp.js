import React, {useEffect, useContext} from 'react'
import { UserContext } from './context/UserContext'
import './styles/global.scss'
import './styles/gameBoard.scss'

const DEV_MODE = true

export const SetupApp = ({children}) => {
    const {userSettings:{darkMode, animations}} = useContext(UserContext)

    useEffect(() => {
        !DEV_MODE && document.addEventListener('contextmenu', e => e.preventDefault());
        return document.removeEventListener('contextmenu', e => e.preventDefault());
    }, [])
    
  return (
    <div className={`gameContainer ${darkMode ? 'dark-mode' : ''} ${animations ? '' : 'no-animations'}`}>
        {children}
    </div>
  )
}
