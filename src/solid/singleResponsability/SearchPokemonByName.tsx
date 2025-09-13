import React from 'react'
import AnimalsSearchBase from './SingleResponsabilityAnimalsSearchBase'

const SearchPokemonByName: React.FC = () => (
  <AnimalsSearchBase
    searchInfoText="Buscar Pokémon por nome"
    serachUrl="https://pokeapi.co/api/v2/pokemon/"
  />
)

export default SearchPokemonByName
