import '../styles/game.css';

function Game(){

    const breeds = [
        {breed: 'Shiba', src: 'src/assets/shiba.png', isClicked: false},
        {breed: 'Spaniel', src: 'src/assets/spaniel.png', isClicked: false},
        {breed: 'Bulldog', src: 'src/assets/bulldog.jpg', isClicked: false},
        {breed: 'Poodle', src: 'src/assets/poodle.jpeg', isClicked: false},
        {breed: 'Bernard', src: 'src/assets/bernard.png', isClicked: false},
        {breed: 'Shih Tzu', src: 'src/assets/shihtzu.png', isClicked: false},
        {breed: 'Pug', src: 'src/assets/pug.jpg', isClicked: false},
        {breed: 'Boxer', src: 'src/assets/boxer.jpg', isClicked: false},
        {breed: 'Beagle', src: 'src/assets/beagle.png', isClicked: false},
        {breed: 'Husky', src: 'src/assets/husky.webp', isClicked: false},
        {breed: 'Spitz', src: 'src/assets/spitz.webp', isClicked: false},
        {breed: 'Maltese', src: 'src/assets/maltese.webp', isClicked: false},
        {breed: 'Collie', src: 'src/assets/collie.webp', isClicked: false},
        {breed: 'Dalmatian', src: 'src/assets/dalmatian.webp', isClicked: false},
        {breed: 'Otterhound', src: 'src/assets/otterhound.webp', isClicked: false},
        {breed: 'Whippet', src: 'src/assets/whippet.webp', isClicked: false},
        {breed: 'Maltipoo', src: 'src/assets/maltipoo.webp', isClicked: false},
        {breed: 'Lowchen', src: 'src/assets/lowchen.webp', isClicked: false},
        {breed: 'Chihuahua', src: 'src/assets/chihuahua.webp', isClicked: false},
        {breed: 'Cavapoo', src: 'src/assets/cavapoo.webp', isClicked: false},
        {breed: 'Briad', src: 'src/assets/briad.webp', isClicked: false},
        {breed: 'Bolognese', src: 'src/assets/bolognese.webp', isClicked: false},
    ]

    function selectBreeds(breeds){
        const unclickedBreeds = breeds.filter(breed => !breed.isClicked);

        if(unclickedBreeds.length === 0) {
            // Player wins
        }

        const randomUnclickedBreed = unclickedBreeds[Math.floor(Math.random() * unclickedBreeds.length)];

        const remainingBreeds = breeds.filter(breed => breed !== randomUnclickedBreed);

        const shuffledRemainingBreeds = remainingBreeds.sort(() => 0.5 - Math.random());

        const currentSelection = [randomUnclickedBreed, ...shuffledRemainingBreeds.slice(0, 5)];

        return currentSelection;
    }

    const currentSelection = selectBreeds(breeds);
    
    const breedCards = currentSelection.map(breed => 
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