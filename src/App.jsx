import { useState } from 'react'
import './App.css'
import Guide from './components/Guide'
import Score from './components/Score';
import Game from './components/Game';

function App() {
  const [showGuide, setShowGuide] = useState(true);

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
    </div>
  )
}

export default App
