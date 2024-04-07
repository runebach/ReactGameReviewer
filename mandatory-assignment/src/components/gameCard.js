import {useNavigate} from "react-router-dom"


export default function GameCard({game}){
    const imgBasePath = "" // filepath to folder of images
    const navigate = useNavigate()



    const handleReviewClick = () => {
        navigate("/updateReview/" + game.id)
    }

    let reviewButton
        if(game.review === null){
            reviewButton = 
            
                <button className="m-3 btn btn-info bg-light" onClick={handleReviewClick}>Write review</button>
            
        }
        else{
            reviewButton = <button className="m-3">See review</button>
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
                <img src={imgBasePath + game.imgName} className="card-img-top" alt="..."/> 
                <div className="card-body">
                    <h5 className="card-title text-light"><span>{game.name}</span></h5>
                    <div className="card bg-light px-2">
                        <p className="card-text">Publisher: {game.publisher}</p>
                        <p className="card-text">Developer: {game.developer}</p>
                        <p className="card-text">Release Year: {game.release_year}</p>
                        <p className="card-text">Genre: {game.genre}</p>
                        <span className="far fa-star">{rating}</span>
                        
                        <div className="text-center">
                            {reviewButton}
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}