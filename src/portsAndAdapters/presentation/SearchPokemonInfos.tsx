import React from 'react'
import PokemonTable from './PokemonTable'
import { useGetPokemonInfos } from './useGetProkemonInfos'

const SearchPokemonInfos: React.FC = () => {
  const {
    searchedPokemonName,
    setSearchedPokemonName,
    pokemonInfos,
    loading,
    error,
    reset,
    search,
  } = useGetPokemonInfos()

  return (
    <div className="bg-gray-100 max-w-md mx-auto my-8 p-4 border border-gray-200 rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-center">Buscar Pokémon</h2>

      <input
        type="text"
        value={searchedPokemonName}
        onChange={e => setSearchedPokemonName(e.target.value)}
        placeholder="Digite o nome do Pokémon"
        className="w-full mb-2 p-2 border border-gray-300 rounded bg-white"
      />

      <div className="flex gap-2 mb-2">
        <button
          onClick={search}
          disabled={loading || !searchedPokemonName}
          className="flex-1 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300"
        >
          {loading ? 'Buscando...' : 'Buscar'}
        </button>

        <button
          onClick={reset}
          disabled={loading && !pokemonInfos && !searchedPokemonName}
          className="flex-1 p-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
        >
          Limpar
        </button>
      </div>

      {error && <p className="text-red-500 mt-2 text-center">{error}</p>}

      {pokemonInfos && (
        <PokemonTable pokemon={pokemonInfos} />
      )}
    </div>
  )
}

export default SearchPokemonInfos
