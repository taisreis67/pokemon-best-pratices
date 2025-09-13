import type { FetchPokemonInfosParams, GetPokemonInfos } from "../../types/GetPokemonType"
import type { PokemonInfos } from "../../types/PokemonInfos"

// function just to illustrate the Dependency Inversion Principle (DIP)
// not work needs refactoring
export const fetchPokemonByType: GetPokemonInfos = async({ searchText, apiUrl }: FetchPokemonInfosParams): Promise<PokemonInfos> => {
  const response = await fetch(`${apiUrl}/${searchText.toLowerCase()}`)
  if (!response.ok) throw new Error('Pokémon não encontrado!')
  const data = await response.json()
  return data.pokemon.map((p: any) => p.pokemon.name)[0]
}
