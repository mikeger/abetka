
export interface Letter {
    letter: string
    word: string
    index: number
}

export function FlipCard(letter: Letter) {  
    var src = "./public/" + letter.index + '.jpg'
    return (
      <p className="item flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            {letter.letter}
          </div>
          <div className="flip-card-back">
            <p>{letter.word}</p>
            <img src={`${process.env.PUBLIC_URL}/${letter.index}.jpg`}  alt={letter.word}/>
          </div>
        </div>
      </p>
    )
}

export default FlipCard
