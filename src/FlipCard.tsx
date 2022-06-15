
export interface Letter {
    letter: string
    word: string
    image?: string
}

export function FlipCard(letter: Letter) {  
    var image = (letter.image === undefined) ? (
        ""
    ) : (
        <img src={letter.image} alt={letter.word}/>
    )

    return (
      <p className="item flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            {letter.letter}
          </div>
          <div className="flip-card-back">
            <p>{letter.word}</p>
            {image}
          </div>
        </div>
      </p>
    )
}

export default FlipCard
