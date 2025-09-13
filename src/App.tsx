// import Search from "./firstCode/Search"
// import SearchPokemonInfos from "./cleanCode/SearchPokemonInfos"
// import SearchPokemonByName from "./solid/interfaceSegregation/SearchPokemonByName"
// import SearchPokemonByName from "./solid/open-closed/SearchPokemonByName"

import SearchPokemonByName from "./solid/dependencyInversion/SearchPokemonByName"

function App() {
  return (
    <>
      {/* <Search /> */}
      {/* <SearchPokemonInfos /> */}
      <SearchPokemonByName />
    </>
  )
}

export default App
