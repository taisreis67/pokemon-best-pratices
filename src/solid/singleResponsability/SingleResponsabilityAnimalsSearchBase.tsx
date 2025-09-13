import React, { useState } from 'react'
import PokemonTable from '../PokemonTable'
import type { PokemonInfos as AnimalInfos } from '../types/PokemonInfos'
import { fetchPokemonInfos as fetchAnimalInfos } from '../api/fetchPokemonInfos'

export type AnimalSearchBaseProps = {
  searchInfoText: string
  serachUrl: string
}

const AnimalsSearchBase: React.FC<AnimalSearchBaseProps> = ({ searchInfoText, serachUrl }) => {
  const [searchedAnimalText, setSearchedAnimalText] = useState<string>('')
  const [animalInfos, setAnimalInfos] = useState<AnimalInfos | undefined>(undefined)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  const resetComponentState = () => {
    setSearchedAnimalText('')
    setAnimalInfos(undefined)
    setError('')
  }

  const prepareForSearch = () => {
    setLoading(true)
    setAnimalInfos(undefined)
    setError('')
  }

  const handleSearch = async () => {
    prepareForSearch()
    try {
      const data = await fetchAnimalInfos({ searchText: searchedAnimalText, apiUrl: serachUrl })
      setAnimalInfos(data)
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-gray-100 max-w-md mx-auto my-8 p-4 border border-gray-200 rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-center">Buscar Animal</h2>

      <input
        type="text"
        value={searchedAnimalText}
        onChange={e => setSearchedAnimalText(e.target.value)}
        placeholder={searchInfoText}
        className="w-full mb-2 p-2 border border-gray-300 rounded bg-white"
      />

      <div className="flex gap-2 mb-2">
        <button
          onClick={handleSearch}
          disabled={loading || !searchedAnimalText}
          className="flex-1 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300"
        >
          {loading ? 'Buscando...' : 'Buscar'}
        </button>

        <button
          onClick={() => resetComponentState() }
          disabled={loading && !animalInfos && !searchedAnimalText}
          className="flex-1 p-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
        >
          Limpar
        </button>
      </div>

      {error && <p className="text-red-500 mt-2 text-center">{error}</p>}

      {animalInfos && (
        <PokemonTable pokemon={animalInfos} />
      )}
    </div>
  )
}

export default AnimalsSearchBase
