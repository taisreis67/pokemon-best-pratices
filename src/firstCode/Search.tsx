import React, { useState } from 'react'

// Componente com nome não descritivo
const Search: React.FC = () => {
  // Nomes não descritivos
  const [name, setName] = useState('')
  const [item, setItem] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSearch = async () => {
    setLoading(true)
    setError('')
    setItem(null)

    // Exemplo de lógica desnecessariamente complexa (contra o KISS)
    let found = false
    let result = null
    let attempts = 0
    while (!found && attempts < 3) {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)
        if (!response.ok) throw new Error('Pokémon não encontrado!')
        result = await response.json()
        found = true
      } catch (err: any) {
        attempts++
        if (attempts >= 3) {
          setError('Pokémon não encontrado após 3 tentativas!')
          setItem(null)
          setLoading(false)
          return
        }
      }
    }
    setItem(result)
    setError('')
    setLoading(false)
  }

  return (
    <div className="bg-gray-100 max-w-md mx-auto my-8 p-4 border border-gray-200 rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-center">Buscar Pokémon</h2>
      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Digite o nome do Pokémon"
        className="w-full mb-2 p-2 border border-gray-300 rounded bg-white"
      />
      <div className="flex gap-2 mb-2">
        <button
          onClick={handleSearch}
          disabled={loading || !name}
          className="flex-1 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300"
        >
          {loading ? 'Buscando...' : 'Buscar'}
        </button>
        <button
          onClick={() => { setName(''); setItem(null); setError(''); }}
          disabled={loading && !item && !name}
          className="flex-1 p-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
        >
          Limpar
        </button>
      </div>
      {error && <p className="text-red-500 mt-2 text-center">{error}</p>}
      {item && (
        <table className="w-full mt-4 border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2">Nome</th>
              <th className="p-2">ID</th>
              <th className="p-2">Altura</th>
              <th className="p-2">Peso</th>
              <th className="p-2">Imagem</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center bg-white">
              <td className="p-2">{item.name}</td>
              <td className="p-2">{item.id}</td>
              <td className="p-2">{item.height}</td>
              <td className="p-2">{item.weight}</td>
              <td className="p-2">
                <img src={item.sprites.front_default} alt={item.name} width={48} height={48} className="mx-auto" />
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  )
}

export default Search
