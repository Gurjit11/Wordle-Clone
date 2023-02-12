import React ,{ useContext,useEffect} from 'react'
import "../App.css"
import { AppContext } from '../App'

const Letter = ({letterPos,attemptPos}) => {
  const {board,correctWord,currentGuess,setDisabled} = useContext(AppContext);

  const letter = board[attemptPos][letterPos];
  
  const correct = correctWord[letterPos] === letter
  const exists = !correct && letter !== "" && correctWord.includes(letter)

  const letterState = (currentGuess.attemptno > attemptPos) ? (correct ? 'correct' : exists ? 'exists' : 'error'): undefined
  
  useEffect(() => {
    if(letter !== '' && !correct && !exists) {
      setDisabled((prev) => [...prev, letter])
    }
  },[currentGuess.attemptno,correct,exists,letter,setDisabled])

  return (
    <div className='letter' id={letterState}>{letter}</div>
  )
}

export default Letter