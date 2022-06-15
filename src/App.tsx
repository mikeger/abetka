import './App.css'
import lettersJSON from './letters.json'
import { Letter, FlipCard } from './FlipCard'

function App() {
  var letters: Array<Letter> = lettersJSON
  
  var contents = letters.map(letter => {
    return FlipCard(letter)
  })

  return (
    <div className="App">
      <div className="header"><h1>Українська абетка для медиків</h1> <i>Ukrainisches Alphabet für Mediziner</i></div>
      <div className="item-container">
      {contents}
      </div>
      <div className="footer">Images from public sources (https://pixabay.com/, Wikipedia) © <a href="mailto:abetka@gerasimenko.me">Michael, Anastasia Gerasymenko</a></div>
    </div>
  );
}

export default App
