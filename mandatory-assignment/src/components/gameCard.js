import {useNavigate} from "react-router-dom"


export default function GameCard({game}){
    const navigate = useNavigate()



    const handleUpdateReviewClick = () => {
        navigate("/updateReview/" + game.id)
    }
    const handleSeeReviewClick = () => {
        console.log(game.review)
    }

        

    let reviewButton
        if(game.review === null){
            reviewButton = <p className="col">No review exists</p>
        }
        else{
            reviewButton = <button className="m-3 btn btn-warning text-dark bg-light col" onClick={handleSeeReviewClick}>See review</button>
        }
    let gameName
        if(game.name.length < 25){
            gameName = game.name
        }
        else{
            gameName = game.name.substring(0,25) + "..."
        }

    let rating
        if(game.rating === null){
            rating = "N/A"
        }
        else{
            rating = game.rating
        }
    return(
        <div className="col mb-4">
            <div className="card bg-secondary">                
                <div className="card-body">
                    <h5 className="card-title text-light"><span>{gameName}</span></h5>
                    <div className="text-center my-2 mb-4">
                        <img src={game.img_path} className="card-img-top img-thumbnail" style={{maxWidth: 250}} alt="..."/> 
                    </div>  
                    <div className="card bg-light px-2">
                        <p className="card-text">Publisher: {game.publisher}</p>
                        <p className="card-text">Developer: {game.developer}</p>
                        <p className="card-text">Release Year: {game.release_year}</p>
                        <p className="card-text">Genre: {game.genre}</p>
                        <span className="far fa-star">{rating}</span>
                        
                        <div className="text-center row">
                            <button className="m-3 btn btn-info bg-light col" onClick={handleUpdateReviewClick}>Write review</button>
                            {reviewButton}

                        </div>
                        <p>{game.review}</p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}