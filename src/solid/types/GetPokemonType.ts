import type { PokemonInfos } from './PokemonInfos'

export type FetchPokemonInfosParams = {
  searchText: string
  apiUrl: string
}

export type GetPokemonInfos = ({ searchText, apiUrl }: FetchPokemonInfosParams) => Promise<PokemonInfos>