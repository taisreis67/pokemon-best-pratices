import React from 'react'
import PokemonSearchBase from './DependencyInjectionPokemonSearchBase'
import { fetchPokemonInfosByName } from './api/fetchPokemonInfosByName'

const SearchPokemonByName: React.FC = () => (
  <PokemonSearchBase
    searchInfoText="Buscar Pokémon por nome"
    serachUrl="https://pokeapi.co/api/v2/pokemon/"
    serachFucntion={fetchPokemonInfosByName}
  />
)

export default SearchPokemonByName
