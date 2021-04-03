import React from "react";

const PokemonDetails = ({ name, height, weight, abilities }) => {
  return (
    <div>
      <h1>Name: {name}</h1>
      <p>Height: {height}</p>
      <p>Weight: {weight}</p>
      <p>Abilities: { abilities.join(", ") }</p>
    </div>
  );
};

export default PokemonDetails;