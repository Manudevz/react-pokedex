import {useEffect, useState} from 'react'
import { PokemonContext } from "./Pokemoncontext"

export const PokemonProvider = ({children}) => {

  const [pokemons, setPokemons] = useState([])

  const getPokemons = async() => {
    try {
      const response = await fetch('http://localhost:3001')
      if(response.ok){
        const pokemons = await response.json()
          setPokemons(pokemons)
      }else{
        throw new Error('lanzo error')
      }
      
    } catch (error) {
      console.log("🚀 ~ file: PokemonProvider.jsx:17 ~ getPokemons ~ error:", error)
      
    }
  }

  useEffect(() => {
    getPokemons()
  
  }, [])
  
  return (
    <PokemonContext.Provider value={{number: 0, pokemons: pokemons}}>
      {children}
    </PokemonContext.Provider>
  )
}
