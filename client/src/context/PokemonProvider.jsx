import { PokemonContext } from "./Pokemoncontext"

export const PokemonProvider = ({children}) => {
  const baseURL = 
  const getAllPokemons = async()=> {
  }
  return (
    <PokemonContext.Provider value={{number: 0}}>
      {children}
    </PokemonContext.Provider>
  )
}
