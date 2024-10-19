import '../styles/guide.css';

function Guide({ handleStart }){
    return (
        <div className='guide'>
            <h2 className='guide__title'>How To Play</h2>
            <p className='guide__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in minima optio sint incidunt ipsa eligendi obcaecati illo cupiditate saepe. Blanditiis, at! Impedit accusantium veritatis maiores qui amet repellat unde nemo, deserunt vitae exercitationem recusandae iusto earum, in ut rerum labore ex optio consequuntur aliquam velit! Hic reprehenderit aliquam quia.</p>
            <button className='guide__btn' onClick={handleStart}>Start Game</button>
        </div>
    )
}

export default Guide