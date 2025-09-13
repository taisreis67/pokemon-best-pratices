import type { GetPokemonInfos, FetchPokemonInfosParams } from '../../solid/types/GetPokemonType'
import type { Pokemon } from '../domain/Pokemon'

export async function getPokemonInfosUseCase(
  getPokemonInfos: GetPokemonInfos,
  params: FetchPokemonInfosParams
): Promise<Pokemon> {
  return await getPokemonInfos(params)
}
