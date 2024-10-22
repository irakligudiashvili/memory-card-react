import '../styles/guide.css';

function Guide({ handleStart }){
    return (
        <div className='guide'>
            <h2 className='guide__title'>How To Play</h2>
            <p className='guide__text'>In this memory game, your goal is to click on each dog without repeating any. If you click on a dog you've already selected, the game ends. Click on all the unique dogs to win, but remember, the cards reshuffle after every click!</p>
            <button className='guide__btn' onClick={handleStart}>Start Game</button>
        </div>
    )
}

export default Guide