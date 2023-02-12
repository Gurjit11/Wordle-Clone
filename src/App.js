import './App.css';
import Board from './components/Board';
import Keyboard from './components/Keyboard';
import { defaultBoard ,generateWordSet } from './Helper';
import { createContext,useState,useEffect } from 'react';

export const AppContext = createContext();

function App() {
  const [board,setBoard] = useState(defaultBoard);
  const [currentGuess,setCurrentGuess] = useState({attemptno:0,letterno:0});
  const [wordSet,setWordSet] = useState([]);
  const [disabled,setDisabled] = useState([]);
  const [correctWord,setCorrectWord] = useState("");

  useEffect(() => {
    let words = generateWordSet()
    setWordSet(words.wordSet);
    setCorrectWord(words.todaysWord.toUpperCase());
    console.log(words.wordSet)
    console.log(words.todaysWord.toUpperCase())
  }, []);

  const onSelectLetter = (keyVal) => {
        if(currentGuess.letterno<5){
        let newBoard = [...board]
        newBoard[currentGuess.attemptno][currentGuess.letterno] = keyVal;
        setBoard(newBoard)
        setCurrentGuess({attemptno:currentGuess.attemptno,letterno:currentGuess.letterno+1});
        }
  }
  const onEnter = () => {
    if(currentGuess.attemptno === 6) return;
      if(currentGuess.letterno === 5){
        let currWord = "";
        for(let i = 0; i < 5;i++){
        currWord = currWord + board[currentGuess.attemptno][i]
        }
        if(wordSet.includes(currWord.toLowerCase())){
        setCurrentGuess({attemptno:currentGuess.attemptno+1,letterno:0})
        }else {
          alert('word not found!');
        }

        if(currWord === correctWord){
          alert('correct word')
        }
      }
  }
  const onDelete = () => {
    if(currentGuess.letterno === 0) return
    let newBoard = [...board]
    newBoard[currentGuess.attemptno][currentGuess.letterno-1] = "";
    setBoard(newBoard)
    setCurrentGuess({attemptno:currentGuess.attemptno,letterno:currentGuess.letterno-1});
  }
  
  return (
    <div className="App">
      <nav>Wordle</nav>
      <AppContext.Provider value = {{board,onEnter,onDelete,onSelectLetter,correctWord,currentGuess,disabled,setDisabled}}>
      <Board/>
      <Keyboard/>
      </AppContext.Provider>
    </div>
  );
}

export default App;
