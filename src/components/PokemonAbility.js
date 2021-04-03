import React from "react"

const PokemonAbility = (id) => {
  return (
    <div>
      <p>{`https://pokeapi.co/api/v2/ability/${id}`}</p>
    </div>
  )
}

export default PokemonAbility;