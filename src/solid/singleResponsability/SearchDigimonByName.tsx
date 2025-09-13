import React from 'react'
import AnimalsSearchBase from './SingleResponsabilityAnimalsSearchBase'

const SearchDigimonByName: React.FC = () => (
  <AnimalsSearchBase
    searchInfoText="Buscar Pokémon por nome"
    serachUrl="https://pokeapi.co/api/v2/pokemon/"
  />
)

export default SearchDigimonByName
