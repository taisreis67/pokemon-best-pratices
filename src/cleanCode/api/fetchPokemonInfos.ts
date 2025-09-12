import type { PokemonInfos } from '../types/PokemonInfos'

export async function fetchPokemonInfos(name: string): Promise<PokemonInfos> {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)
  if (!response.ok) throw new Error('Pokémon não encontrado!')
  return response.json()
}
