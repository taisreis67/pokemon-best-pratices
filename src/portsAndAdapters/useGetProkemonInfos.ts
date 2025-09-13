import { useState } from 'react'
import { fetchPokemonInfos } from './api/fetchPokemonInfos'
import type { PokemonInfos } from './types/PokemonInfos'

export function useGetPokemonInfos() {
  const [searchedPokemonName, setSearchedPokemonName] = useState<string>('')
  const [pokemonInfos, setPokemonInfos] = useState<PokemonInfos | undefined>(undefined)
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
      const data = await fetchPokemonInfos(searchedPokemonName)
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
