import React,{useContext} from 'react'
import '../App.css'
import { AppContext } from '../App'

const Keycode = ({keyVal , bigkey , isdisabled}) => {
  const {onDelete,onEnter,onSelectLetter} = useContext(AppContext);
const selectLetter = () => {

  if(keyVal === 'Delete'){
      onDelete()
  }else if(keyVal === 'Enter'){
      onEnter()
  }else{
      onSelectLetter(keyVal)
  } 
}

  return (
    <div className='keys' id = {bigkey ? "button" : isdisabled ? 'disable':undefined} onClick={selectLetter}>
      {keyVal}
    </div>
  )
}

export default Keycode