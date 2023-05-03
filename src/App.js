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
      
      <button onClick={newJoke}>Joke</button>
      <ul>
        {jokes.map((joke) => (
          <li key={joke.id}>
            {joke.setup} {joke.delivery}
            <button onClick={() => removeJoke(joke.id)}>Remove</button>
          </li>
        ))}
      </ul>  
    </div>
  );
}

export default App;
