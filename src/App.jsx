import { useState } from 'react'
import './App.css'
import Guide from './components/Guide'
import Score from './components/Score';

function App() {
  const [showGuide, setShowGuide] = useState(true);

  const handleStartGame = () => {
    setShowGuide(false);
  }

  return (
    <div className='body'>
      {showGuide && <Guide handleStart={handleStartGame} />}
      {!showGuide && (
        <div>
          <Score currentScore={0} maxScore={15} />
          <h2>Game Started</h2>
        </div>
      )}
    </div>
  )
}

export default App
