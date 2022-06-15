import './App.css'
import lettersJSON from './letters.json'
import { Letter, FlipCard } from './FlipCard'

function App() {
  var letters: Array<Letter> = lettersJSON
  
  var contents = letters.map(letter => {
    return FlipCard(letter)
  })

  return (
    <div className="App item-container">
      {contents}
      <div className="footer">Images from public sources (https://pixabay.com/, Wikipedia)</div>
    </div>
  );
}

export default App
