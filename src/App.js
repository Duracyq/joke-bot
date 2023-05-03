import { useState } from 'react'
import './App.css';

function App() {

  const url = 'https://v2.jokeapi.dev/joke/Any'

  const [jokes, setJokes] = useState([])
  
  const [isLoading, setIsLoading] = useState(false)

  const newJoke = async () => {
    setIsLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    console.log(data); // Log the response to the console
    setJokes((prev) => [data, ...prev]);
    setIsLoading(false);
  }

  const removeJoke = (id) => {
    setJokes((prev) => prev.filter((element) => element.id !== id));
  };

  return (
    <div className="App">
      <h3 className='App-header'>
        {isLoading
          ? "loading more jokes..."
          : `Jokes Overview ${
            jokes.length === 1
              ? "(1 joke loaded)"
              : `(${jokes.length} jokes loaded) `
          }`}
      </h3>
      <div
        onClick={newJoke}
        id="joke-button" >Joke</div>
      <ul>
        {jokes.map((joke) => (
          <li key={joke.id}>
            {joke.setup} {joke.delivery}
            <button onClick={() => removeJoke(joke.id)} id='remove-button'>Remove</button>
          </li>
        ))}
      </ul>
      <div id="footer">
        <a
          href="https://www.flaticon.com/free-icons/bot"
          title="bot icons"
          target="_blank"
          rel="noreferrer">Bot icons created by Freepik - Flaticon</a>
      </div>  
    </div>
  );
}

export default App;
