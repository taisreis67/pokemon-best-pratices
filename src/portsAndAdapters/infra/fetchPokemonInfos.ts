import type { FetchPokemonInfosParams, GetPokemonInfos } from "../application/GetPokemonTypePort"
import type { Pokemon } from "../domain/Pokemon"

export const fetchPokemonInfosByName: GetPokemonInfos = async({ searchText, apiUrl }: FetchPokemonInfosParams): Promise<Pokemon> => {
  const response = await fetch(`${apiUrl}/${searchText.toLowerCase()}`)
  if (!response.ok) throw new Error('Pokémon não encontrado!')
  return response.json()
}
