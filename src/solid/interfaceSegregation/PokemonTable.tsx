import React from 'react'
import PokemonTableRow from './PokemonTableRow'

export type PokemonTableInfos = {
  name: string
  id: number
  height: number
  weight: number
  sprites: {
    front_default: string
  }
}

const PokemonTable: React.FC<{ pokemon: PokemonTableInfos }> = ({ pokemon }) => (
  <table className="w-full mt-4 border-collapse">
    <thead>
      <tr className="bg-gray-200">
        <th className="p-2">Nome</th>
        <th className="p-2">ID</th>
        <th className="p-2">Altura</th>
        <th className="p-2">Peso</th>
        <th className="p-2">Imagem</th>
      </tr>
    </thead>
    <tbody>
      <PokemonTableRow pokemon={pokemon} />
    </tbody>
  </table>
)

export default PokemonTable
