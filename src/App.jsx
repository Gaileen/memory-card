import { useState } from 'react'
import Cards from './components/Cards'
import Score from './components/Score';
import './styles/App.css'

function App() {
  const [highScore, setHighScore] = useState(0);

  // Num of unique clicked cards.
  const [clicked, setClicked] = useState([]);

  return (
    <>
      <header>
        <h1>Memory Game</h1>
        <Score highScore={highScore} clicked={clicked} />
      </header>

      <Cards highScore={highScore} setHighScore={setHighScore} clicked={clicked} setClicked={setClicked} />
    </>
  )
}

export default App