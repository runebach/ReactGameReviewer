// import { useFetchSortedGamesQuery } from "../store"
// import GameCard from "./gameCard"

// export default function SortedGames(){
//     const {data, error, isFetching} = useFetchSortedGamesQuery()



//     let content
//     if(isFetching){
//         content = <div>Loading</div>
//     }
//     else if(error){
//         content = <div>Error. Cannot load games.</div>
//     }
//     else{
//         content = data.map((game) => {
//             return <GameCard key={game.id} game={game}></GameCard>
//         })
//     }
//     return(
//         <div className="container">
//             <div className="row row-cols-4">
//                 {content}
//             </div>
//         </div>
//     )
// }