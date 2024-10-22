import { useState } from 'react'
import './App.css'
import Guide from './components/Guide'
import Score from './components/Score';
import Game from './components/Game';
import GameOver from './components/GameOver';

function App() {
  const [showGuide, setShowGuide] = useState(true);
  const [gameOver, setGameOver] = useState(false);
  const [currentScore, setCurrentScore] = useState(0);
  const [maxScore, setMaxScore] = useState(0);

  const handleCurrentScore = () => {
    setCurrentScore(currentScore + 1)
  }

  const handleMaxScore = () => {
    if( currentScore > maxScore) {
      setMaxScore(currentScore);
    }
  }

  const handleGameOver = () => {
    setGameOver(!gameOver);
    handleMaxScore();
  }

  const handleStartGame = () => {
    setShowGuide(false);
    setGameOver(!gameOver);
    setCurrentScore(0);
  }

  return (
    <div className='body'>
      {showGuide && !gameOver && <Guide handleStart={handleStartGame} />}
      {!showGuide && !gameOver && (
          <div className='container'>
            <Score currentScore={currentScore} maxScore={maxScore}/>
            <Game handleGameOver={handleGameOver} handleCurrentScore={handleCurrentScore} />
          </div>
      )}
      {gameOver && (
        <GameOver currentScore={currentScore} maxScore={maxScore} handleStartGame={handleStartGame} />
      )}
    </div>
  )
}

export default App
