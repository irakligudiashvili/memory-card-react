import '../styles/gameWon.css';

function GameWon({ currentScore, maxScore, handleRestartGame }){
    return (
        <div className='gameOver'>
            <h2>You Win!</h2>
            <div className='gameOver__score'>
                <p>Current Score: {currentScore}</p>
                <p>Max Score: {maxScore}</p>
            </div>
            <button className='gameOver__btn' onClick={handleRestartGame}>Play Again</button>
        </div>
    )
}

export default GameWon;