import type { Pokemon } from '../domain/Pokemon'

export type FetchPokemonInfosParams = {
  searchText: string
  apiUrl: string
}

export type GetPokemonInfos = ({ searchText, apiUrl }: FetchPokemonInfosParams) => Promise<Pokemon>