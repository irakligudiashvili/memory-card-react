import '../styles/gameOver.css';

function GameOver({ currentScore, maxScore, handleStartGame }){
    return (
        <div className='gameOver'>
            <div className='gameOver__score'>
                <p>Current Score: {currentScore}</p>
                <p>Max Score: {maxScore}</p>
            </div>
            <button className='gameOver__btn' onClick={handleStartGame}>Play Again</button>
        </div>
    )
}

export default GameOver;