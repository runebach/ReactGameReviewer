import {useDispatch, useSelector} from "react-redux"
import { changeSearchTerm } from "../store"
import {useNavigate} from "react-router-dom"

export default function SearchBar(){
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const searchTerm = useSelector((state) => {
        return state.searchedGames.searchTerm
           })

    const handleSearchTermChange = (event) => {
        dispatch(changeSearchTerm(event.target.value))
        navigate("/searchedGames")
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        navigate("/searchedGames")
    }


    return(
        <form onSubmit={handleSubmit}>
            <label>Search</label>
            <input className="input ml-2" value={searchTerm} onChange={handleSearchTermChange}></input>
        </form>
    )
}