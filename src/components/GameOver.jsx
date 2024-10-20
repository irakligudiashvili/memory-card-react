import '../styles/gameOver.css';

function GameOver({ currentScore, maxScore }){
    return (
        <div className='gameOver'>
            <div className='gameOver__score'>
                <p>Current Score: {currentScore}</p>
                <p>Max Score: {maxScore}</p>
            </div>
            <button className='gameOver__btn'>Play Again</button>
        </div>
    )
}

export default GameOver;