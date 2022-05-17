import React from 'react'
import StoryGrid from './StoryGrid'
import StoryContextProvider from '../context/StoryContext'
import ClassicGridContainer from './ClassicGridContainer'
import '../styles/gameBoard.scss'

const GameUI = ({solution, mode}) => {
    if(mode === 'Classic') {
        return (
            <ClassicGridContainer solution={solution} />
        )
    }
    return (
        <StoryContextProvider>
            <StoryGrid />
        </StoryContextProvider>
    )
}
export default GameUI