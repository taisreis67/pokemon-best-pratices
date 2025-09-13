import React from 'react'
import PokemonSearchBase from './InterfaceSegregationPokemonSearchBase'

const SearchPokemonByName: React.FC = () => (
  <PokemonSearchBase
    searchInfoText="Buscar Pokémon por nome"
    serachUrl="https://pokeapi.co/api/v2/pokemon/"
  />
)

export default SearchPokemonByName
