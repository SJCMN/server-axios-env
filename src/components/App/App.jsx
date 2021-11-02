
import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App () {

  const [gifs, setGifs] = useState([]);

  const handleClick = () => {

    axios.get('/giphy')
    .then((response) => {
      console.log('Response is:', response);
      setGifs(response.data.data)
    }).catch ((error) => {
      console.log('Error in client GET', error);
    })


  }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">APIS</h1>
          <h4><i>APIS</i></h4>
        </header>
        <button onClick={handleClick}>GIPHY</button>
        {gifs.map(gif => 
          <img key={gif.id} title={gif.title} src={gif.images.fixed_height.url} />
        )}
        <br/>
      </div>
    );
  
}

export default App;
