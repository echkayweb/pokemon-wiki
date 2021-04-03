import React from "react";

const Pokemon = ({ id, altText }) => {
  return (
    <div>
      <img
        alt={`${altText}`}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
      />
      <p></p>
    </div>
  );
};

export default Pokemon;