function GameOver({ currentScore, maxScore }){
    return (
        <div className='gameOver'>
            <p>{currentScore}</p>
            <p>{maxScore}</p>
            <button>Play Again</button>
        </div>
    )
}

export default GameOver;