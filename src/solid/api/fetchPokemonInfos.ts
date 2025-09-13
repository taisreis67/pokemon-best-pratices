import type { FetchPokemonInfosParams } from '../types/GetPokemonType'
import type { PokemonInfos } from '../types/PokemonInfos'

export const fetchPokemonInfos = async({ searchText, apiUrl }: FetchPokemonInfosParams): Promise<PokemonInfos> => {
  const response = await fetch(`${apiUrl}/${searchText.toLowerCase()}`)
  if (!response.ok) throw new Error('Pokémon não encontrado!')
  return response.json()
}
