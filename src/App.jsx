import { useState } from 'react'
import './App.css'
import Guide from './components/Guide'
import Score from './components/Score';
import Game from './components/Game';
import GameOver from './components/GameOver';
import GameWon from './components/GameWon';

function App() {
  const [showGuide, setShowGuide] = useState(true);
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);
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

  const handleGameWon = () => {
    setGameWon(true);
    setGameOver(false);
  }

  const handleGameOver = () => {
    setGameOver(!gameOver);
    handleMaxScore();
  }

  const handleStartGame = () => {
    setShowGuide(false);
    setCurrentScore(0);
  }

  const handleRestartGame = () => {
    setGameOver(false);
    setGameWon(false);
    setCurrentScore(0);
  }

  const handleWin = () => {
    console.log('you win');
  }

  return (
    <div className='body'>
      {showGuide && !gameOver && <Guide handleStart={handleStartGame} />}
      {!showGuide && !gameOver && !gameWon &&(
          <div className='container'>
            <Score currentScore={currentScore} maxScore={maxScore}/>
            <Game handleGameOver={handleGameOver} handleGameWon={handleGameWon} handleCurrentScore={handleCurrentScore} handleWin={handleWin} />
          </div>
      )}
      {gameOver && !gameWon && (
        <GameOver currentScore={currentScore} maxScore={maxScore} handleRestartGame={handleRestartGame} />
      )}

      {gameWon && (
        <GameWon currentScore={currentScore} maxScore={maxScore} handleRestartGame={handleRestartGame} />
      )}
    </div>
  )
}

export default App
