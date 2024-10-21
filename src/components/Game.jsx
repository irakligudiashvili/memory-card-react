import '../styles/game.css';

function Game(){

    const breeds = [
        {breed: 'Shiba', src: 'src/assets/shiba.png', isClicked: false},
        {breed: 'Spaniel', src: 'src/assets/spaniel.png', isClicked: false},
        {breed: 'Bulldog', src: 'src/assets/bulldog.jpg', isClicked: false},
        {breed: 'Poodle', src: 'src/assets/poodle.jpeg', isClicked: false},
        {breed: 'Bernard', src: 'src/assets/bernard.png', isClicked: false},
        {breed: 'Shih Tzu', src: 'src/assets/shihtzu.png', isClicked: false},
    ]

    
    const breedCards = breeds.map(breed => 
        <div className='card' key={breed.breed}>
            <img className='cardImg' src={breed.src}></img>
            <p className='cardText'>{breed.breed}</p>
        </div>
    )

    return (
        <div className='game'>
            {breedCards}
        </div>
    )
}

export default Game