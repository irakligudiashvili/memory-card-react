import { useState } from 'react'
import './App.css'
import Guide from './components/Guide'

function App() {
  const [showGuide, setShowGuide] = useState(true);

  const handleStartGame = () => {
    setShowGuide(false);
  }

  return (
    <div>
      {showGuide && <Guide handleStart={handleStartGame} />}
      {!showGuide && (
        <div>
          <h2>Game Started</h2>
        </div>
      )}
    </div>
  )
}

export default App
