import { useState } from 'react';
import '../styles/game.css';

function Game({ handleGameOver, handleGameWon, handleCurrentScore, }){

    const [breeds, setBreed] = useState([
        {breed: 'Shiba', src: '/assets/shiba.png', isClicked: false},
        {breed: 'Spaniel', src: '/assets/spaniel.png', isClicked: false},
        {breed: 'Bulldog', src: '/assets/bulldog.jpg', isClicked: false},
        {breed: 'Poodle', src: '/assets/poodle.jpeg', isClicked: false},
        {breed: 'Bernard', src: '/assets/bernard.png', isClicked: false},
        {breed: 'Shih Tzu', src: '/assets/shihtzu.png', isClicked: false},
        {breed: 'Pug', src: '/assets/pug.jpg', isClicked: false},
        {breed: 'Boxer', src: '/assets/boxer.jpg', isClicked: false},
        {breed: 'Beagle', src: '/assets/beagle.png', isClicked: false},
        {breed: 'Husky', src: '/assets/husky.webp', isClicked: false},
        {breed: 'Spitz', src: '/assets/spitz.webp', isClicked: false},
        {breed: 'Maltese', src: '/assets/maltese.webp', isClicked: false},
        {breed: 'Collie', src: '/assets/collie.webp', isClicked: false},
        {breed: 'Dalmatian', src: '/assets/dalmatian.webp', isClicked: false},
        {breed: 'Otterhound', src: '/assets/otterhound.webp', isClicked: false},
        {breed: 'Whippet', src: '/assets/whippet.webp', isClicked: false},
        {breed: 'Maltipoo', src: '/assets/maltipoo.webp', isClicked: false},
        {breed: 'Lowchen', src: '/assets/lowchen.webp', isClicked: false},
        {breed: 'Chihuahua', src: '/assets/chihuahua.webp', isClicked: false},
        {breed: 'Cavapoo', src: '/assets/cavapoo.webp', isClicked: false},
        {breed: 'Briad', src: '/assets/briad.webp', isClicked: false},
        {breed: 'Bolognese', src: '/assets/bolognese.webp', isClicked: false},
    ]);

    // Fisher-Yates shuffle

    const shuffleArray = (array) => {
        const arr = [...array];
        for (let i = arr.length - 1; i > 0; i--){
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }

        return arr;
    }

    const selectBreeds = (breeds) => {
        const unclickedBreeds = breeds.filter(breed => !breed.isClicked);

        if(unclickedBreeds.length === 0){
            handleGameWon();
            return []
        }

        const randomUnclickedBreed = unclickedBreeds[Math.floor(Math.random() * unclickedBreeds.length)];
        const remainingBreeds = breeds.filter(breed => breed !== randomUnclickedBreed);
        const shuffledRemainingBreeds = remainingBreeds.sort(() => 0.5 - Math.random());

        const shuffledAllBreeds = [randomUnclickedBreed, ...shuffledRemainingBreeds.slice(0, 5)];

        return shuffleArray(shuffledAllBreeds);
    }

    function handleGame(clickedBreed){
        if (clickedBreed.isClicked === true) {
            console.log('you lose');
            handleGameOver();
            return
        } 

        handleCurrentScore();

        setBreed((prevBreeds) => {
            const updatedBreeds = prevBreeds.map(breed => breed.breed === clickedBreed.breed
                ? {...breed, isClicked: true}
                : breed
            ); 

            return updatedBreeds;
            
        });
    }

    const currentSelection = selectBreeds(breeds);
    
    const breedCards = currentSelection.map(breed => 
        <div className='card' key={breed.breed} onClick={() => handleGame(breed)}>
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