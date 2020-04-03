import React from 'react';
import PokemonSearch from './components/PokemonSearch';
import './App.css';

function App() {
  return (
    <div className="App">
        <PokemonSearch name="John doe" numberOfPokemons={5}/>
    </div>
  );
}

export default App;
