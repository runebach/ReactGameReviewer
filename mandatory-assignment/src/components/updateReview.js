import {useState} from "react"
import {useNavigate, useParams} from "react-router-dom"

import { useUpdateGameMutation, useFetchGameByIdQuery, useFetchSortedGamesQuery } from "../store"

export default function UpdateReview(){
    const navigate = useNavigate()
    const {gameId} = useParams()
    const [reviewText, setReviewText] = useState("")
    const game = useFetchGameByIdQuery(gameId).currentData
    const {refetch} = useFetchSortedGamesQuery()

    const [UpdateReview] = useUpdateGameMutation()



    const handleSubmit = (event) => {
        event.preventDefault()
        const updatedGame = {...game, review: reviewText}
        UpdateReview({gameId: gameId, updatedGame: updatedGame}).then(() => {
            refetch()
            navigate("/searchedGames")
        })
    }
    
    if(!game){
        return(
            <div>Loading...</div>
        )
    }

    return(
        <div className="col mb-4">
            <div className="card bg-secondary">
                <div className="card-body">
                    <h5 className="card-title text-light">
                        <span>Write a review for {game.name}</span>
                    </h5>
                    <div className="card bg-light px-2">
                        <form onSubmit={handleSubmit}>
                            <input className="input m-2" value={reviewText} onChange={(e) => setReviewText(e.target.value)}></input>
                            <button className="btn btn-dark m-2" type="submit">Submit review</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
    
    
}