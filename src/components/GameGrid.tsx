//imports we need

import { useEffect, useState } from "react"
import apiClient from "../services/apiClient"
import { Text } from "@chakra-ui/react"


//help us shaping our data in the form od our interfaces(type) props to pass data from parent component to child
interface Game{
    id: number
    name: string
}

interface FetchGameResponse{
    count: number
    results: Game []
}

const GameGrid = () => {

    //we need our useStates to help us render update our UI with our games and others]
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState('')



    //create a helper function to help us fetch our code

    const fetchGames = () =>{

        apiClient.get('/games')
        .then(response=>setGames(response.data.results))
        .catch(error=>{
            setError(error.message)
        })
    }


    //useEffect to pass in data
    useEffect(() => {
      
    
        fetchGames();
    }, [])
    

    //we have other helper functions to add, delete, or update data


  return (
    <>
    {/* display our data: ul, li, grid, table, and we usually map it with a unique key */}
    <ul>
        {games.map(game => <li key={game.id}>{game.name}</li>)}
    </ul>
    {error && <Text color='red'>{error}</Text>}
    </>
  )
}

export default GameGrid