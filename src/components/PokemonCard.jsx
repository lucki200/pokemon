import { useState, useEffect } from "react";
import axios from "axios";

function PokemonCard({ name }) {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then((response) => {
      setPokemonData(response.data);
    });
  }, [name]);

  if (!pokemonData) {
    return <div className="border rounded-md p-4">Cargando...</div>;
  }

  return (
    <div className="border rounded-md p-4">
      <h2 className="text-lg font-medium text-center text-white">{name}</h2>
      <img
        className="mx-auto mt-2"
        src={pokemonData.sprites.front_default}
        alt={name}
      />
      <p className="mt-2">
        <span className="font-medium text-center text-white ">Altura:</span>{" "}
        {pokemonData.height / 10}m
      </p>
      <p>
        <span className="font-medium text-center text-white">Peso:</span>{" "}
        {pokemonData.weight / 10}kg
      </p>
    </div>
  );
}

export default PokemonCard;