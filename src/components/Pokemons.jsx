import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardPokemon from './PokemonCard';

function Pokemons() {
    const [pokemons, setPokemons] = useState([]);
    useEffect(() => {
        async function fetchData() {
          const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
          setPokemons(response.data.results);
        }
        fetchData();
      }, [axios]);
    
 
    
    return (
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 text-center">Lista de Pokémon</h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {pokemons.map((pokemon) => (
              <CardPokemon key={pokemon.name} name={pokemon.name} />
            ))}
          </div>
        </div>
      );
    }

export default Pokemons