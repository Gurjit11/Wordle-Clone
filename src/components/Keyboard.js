import React, { useCallback, useEffect,useContext } from 'react'
import { keys1,keys2,keys3 } from '../Helper'
import { AppContext } from '../App'
import Keycode from './Keycode'

const Keyboard = () => {

 const {onDelete,onEnter,onSelectLetter,disabled} = useContext(AppContext)

  const handleKeyboard = useCallback((ev) => {
    if(ev.key === 'Enter'){
      onEnter()
    }else if(ev.key === 'Backspace'){
      onDelete()
    }else{
      keys1.forEach((key) => {
        if(ev.key.toUpperCase() === key){
          onSelectLetter(key)
        }
      })
      keys2.forEach((key) => {
        if(ev.key.toUpperCase() === key){
          onSelectLetter(key)
        }
      })
      keys3.forEach((key) => {
        if(ev.key.toUpperCase() === key){
          onSelectLetter(key)
        }
      })
    }
  })

  useEffect(() => {
    document.addEventListener('keydown',handleKeyboard)
    return() => {
      document.removeEventListener('keydown',handleKeyboard)
    }
  },[handleKeyboard])

  return (
    <div className='keyboard' onKeyDown={handleKeyboard}>
      <div className='line1'>{ keys1.map((key) => {
        return <Keycode key = {key.toString()} keyVal = {key } isdisabled = {disabled.includes(key)}/>
      })
      }</div>
      <div className='line2'>{ keys2.map((key) => {
        return <Keycode key = {key.toString()} keyVal = {key } isdisabled = {disabled.includes(key)}/>
      })
      }</div>
      <div className='line3'>
        <Keycode keyVal = 'Enter' bigkey/>

        { keys3.map((key) => {
        return <Keycode key = {key.toString()} keyVal = {key } isdisabled = {disabled.includes(key)}/>
      })
      }
      <Keycode keyVal = 'Delete' bigkey/>
      </div>
    </div>
  )
}

export default Keyboard