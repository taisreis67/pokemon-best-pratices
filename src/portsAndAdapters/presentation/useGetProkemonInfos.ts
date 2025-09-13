import { useState } from 'react'
import { getPokemonInfosUseCase } from '../application/GetPokemonInfosUseCase'
import { fetchPokemonInfosByName } from '../infra/fetchPokemonInfos'
import type { Pokemon } from '../domain/Pokemon'

export function useGetPokemonInfos() {
  const [searchedPokemonName, setSearchedPokemonName] = useState<string>('')
  const [pokemonInfos, setPokemonInfos] = useState<Pokemon | undefined>(undefined)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  const reset = () => {
    setSearchedPokemonName('')
    setPokemonInfos(undefined)
    setError('')
  }

  const search = async () => {
    setLoading(true)
    setError('')
    setPokemonInfos(undefined)
    try {
      const data = await getPokemonInfosUseCase(fetchPokemonInfosByName, { searchText: searchedPokemonName, apiUrl: 'https://pokeapi.co/api/v2/pokemon' })
      setPokemonInfos(data)
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return {
    searchedPokemonName,
    setSearchedPokemonName,
    pokemonInfos,
    loading,
    error,
    reset,
    search,
  }
}
