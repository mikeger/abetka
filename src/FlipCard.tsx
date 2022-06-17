
export interface Letter {
    letter: string
    word: string
    index: number
}

export function FlipCard(letter: Letter) {  
    const src = "./public/" + letter.index + '.jpg'

    
    const start = () => {
        const audio = new Audio(
            `${process.env.PUBLIC_URL}/${letter.index}.mp3`
        )

        audio.play()
    }
    
    return (
      <span className="item flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            {letter.letter}
          </div>
          <div className="flip-card-back">
            <p><button onClick={start} className="play">{letter.word} ▶️</button></p>
            <img src={`${process.env.PUBLIC_URL}/${letter.index}.jpg`}  alt={letter.word}/>
          </div>
        </div>
      </span>
    )
}

export default FlipCard
