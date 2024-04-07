import {useSelector} from "react-redux"
import { useFetchSortedGamesQuery } from "../store"
import GameCard from "./gameCard"

export default function SearchedGames(){
    const searchTerm = useSelector((state) => {
        return state.searchedGames.searchTerm
    })
    const {data, error, isFetching} = useFetchSortedGamesQuery()



    let content
    if(isFetching){
        content = <div>Loading</div>
    }
    else if(error){
        content = <div>Error. Cannot load games.</div>
    }
    else{
        content = data
        .filter(game => game.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        game.publisher.toLowerCase().includes(searchTerm.toLowerCase()) || 
        game.developer.toLowerCase().includes(searchTerm.toLowerCase()))
        .map((game) => {
            return <GameCard key={game.id} game={game}></GameCard>
        })
        //console.log(searchTerm)
    }
    return(
        <div className="container">
            <div className="row row-cols-4">
                {content}
            </div>
        </div>
    )
}