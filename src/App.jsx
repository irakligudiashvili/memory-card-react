import { useState } from 'react'
import './App.css'
import Guide from './components/Guide'
import Score from './components/Score';
import Game from './components/Game';
import GameOver from './components/GameOver';

function App() {
  const [showGuide, setShowGuide] = useState(true);
  const [showGameOver, setGameOver] = useState(true);

  const handleStartGame = () => {
    setShowGuide(false);
  }

  return (
    <div className='body'>
      {showGuide && <Guide handleStart={handleStartGame} />}
      {!showGuide && (
        <div className='container'>
          <Score currentScore={0} maxScore={15} />
          <Game />
        </div>
      )}
      {showGameOver && (
        <GameOver currentScore={5} maxScore={15} />
      )}
    </div>
  )
}

export default App
