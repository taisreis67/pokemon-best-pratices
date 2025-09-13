import React from 'react'
import type { Pokemon } from '../domain/Pokemon'

const PokemonTableRow: React.FC<{ pokemon: Pokemon }> = ({ pokemon }) => (
  <tr className="text-center bg-white">
    <td className="p-2">{pokemon.name}</td>
    <td className="p-2">{pokemon.id}</td>
    <td className="p-2">{pokemon.height}</td>
    <td className="p-2">{pokemon.weight}</td>
    <td className="p-2">
      <img src={pokemon.sprites.front_default} alt={pokemon.name} width={48} height={48} className="mx-auto" />
    </td>
  </tr>
)

export default PokemonTableRow
