import { useState } from 'react'
// import robotImage from '../public/robot.png'
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
      <div className="App-header" id="header">
        <img src={process.env.PUBLIC_URL + '/robot.png'} alt="Robot" id='robot'/>
        <h1>joke-bot</h1>
      </div>
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
      <div className='App-container'>
      <ul>
        {jokes.map((joke) => (
          <li key={joke.id}>
            {joke.setup} {joke.delivery}
            <button onClick={() => removeJoke(joke.id)} id='remove-button'>Remove</button>
          </li>
        ))}
      </ul>
      </div>
      <div class="footer">
        <p>API used: <a
          href='https://sv443.net/jokeapi/v2/'
          title='JokeAPI'
          target='_blank'
          rel="noreferer noreferrer">JokeAPI</a>
        </p>
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
