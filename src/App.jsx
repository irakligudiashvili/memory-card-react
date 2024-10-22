import { useState } from 'react'
import './App.css'
import Guide from './components/Guide'
import Score from './components/Score';
import Game from './components/Game';
import GameOver from './components/GameOver';

function App() {
  const [showGuide, setShowGuide] = useState(true);
  const [gameOver, setGameOver] = useState(false);

  const handleGameOver = () => {
    setGameOver(!gameOver);
  }

  const handleStartGame = () => {
    setShowGuide(false);
  }

  return (
    <div className='body'>
      {showGuide && !gameOver && <Guide handleStart={handleStartGame} />}
      {!showGuide && !gameOver && (
          <div className='container'>
            <Score currentScore={0} maxScore={15} />
            <Game handleGameOver={handleGameOver} />
          </div>
      )}
      {gameOver && (
        <GameOver currentScore={5} maxScore={15} handleGameOver={handleGameOver} />
      )}
    </div>
  )
}

export default App
