import { vi, describe, it, expect } from 'vitest'
import { fetchPokemonNamesByType } from '../../cleanCode/api/fetchPokemonNamesByType'

// Mock global fetch
const mockFetch = vi.fn()
globalThis.fetch = mockFetch

describe('fetchPokemonNamesByType', () => {
  it('deve chamar o endpoint correto da API de tipo de Pokémon', async () => {
    mockFetch.mockResolvedValueOnce({ ok: true, json: async () => ({ pokemon: [] }) })
    await fetchPokemonNamesByType('fire')
    expect(mockFetch).toHaveBeenCalledWith('https://pokeapi.co/api/v2/type/fire')
  })
})
