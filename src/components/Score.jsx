import '../styles/score.css';

function Score({ currentScore, maxScore }){

    return (
        <div className='score'>
            <div className='score__wrapper'>
                <p>Current Score:</p>
                <p>{currentScore}</p>
            </div>

            <div className='score__wrapper'>
                <p>High Score:</p>
                <p>{maxScore}</p>
            </div>
        </div>
    )
}

export default Score