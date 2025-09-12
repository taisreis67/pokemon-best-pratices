export async function fetchPokemonNamesByType(type: string): Promise<string[]> {
  const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`)
  if (!response.ok) throw new Error('Tipo de Pokémon não encontrado!')
  const data = await response.json()
  // Extrai os nomes dos pokémons do resultado
  return data.pokemon.map((p: any) => p.pokemon.name)
}
