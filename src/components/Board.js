import React from 'react'
import Letter from './Letter';


const Board = () => {
  return (

    <div className='board'>
        <div className='row'>
            <Letter letterPos = {0} attemptPos = {0}/>
            <Letter letterPos = {1} attemptPos = {0}/>
            <Letter letterPos = {2} attemptPos = {0}/>
            <Letter letterPos = {3} attemptPos = {0}/>
            <Letter letterPos = {4} attemptPos = {0}/>
        </div>
        <div className='row'>
            <Letter letterPos = {0} attemptPos = {1}/> 
            <Letter letterPos = {1} attemptPos = {1}/>
            <Letter letterPos = {2} attemptPos = {1}/>
            <Letter letterPos = {3} attemptPos = {1}/>
            <Letter letterPos = {4} attemptPos = {1}/>
        </div>
        <div className='row'>
            <Letter letterPos = {0} attemptPos = {2}/> 
            <Letter letterPos = {1} attemptPos = {2}/>
            <Letter letterPos = {2} attemptPos = {2}/>
            <Letter letterPos = {3} attemptPos = {2}/>
            <Letter letterPos = {4} attemptPos = {2}/>
        </div>
        <div className='row'>
            <Letter letterPos = {0} attemptPos = {3}/> 
            <Letter letterPos = {1} attemptPos = {3}/>
            <Letter letterPos = {2} attemptPos = {3}/>
            <Letter letterPos = {3} attemptPos = {3}/>
            <Letter letterPos = {4} attemptPos = {3}/>
        </div>
        <div className='row'>
            <Letter letterPos = {0} attemptPos = {4}/> 
            <Letter letterPos = {1} attemptPos = {4}/>
            <Letter letterPos = {2} attemptPos = {4}/>
            <Letter letterPos = {3} attemptPos = {4}/>
            <Letter letterPos = {4} attemptPos = {4}/>
        </div>
        <div className='row'>
            <Letter letterPos = {0} attemptPos = {5}/> 
            <Letter letterPos = {1} attemptPos = {5}/>
            <Letter letterPos = {2} attemptPos = {5}/>
            <Letter letterPos = {3} attemptPos = {5}/>
            <Letter letterPos = {4} attemptPos = {5}/>
        </div>
    </div>
  );
}

export default Board