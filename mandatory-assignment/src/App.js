import {Routes, Route, Link} from "react-router-dom"

import SortedGames from "./components/sortedGames"
import Home from "./components/home"
import SearchBar from "./components/searchBar"
import SearchedGames from "./components/searchedGames"
import UpdateReview from "./components/updateReview"


export default function App() {
    return(
        <div className="container is-fluid">
            <div className="py-3">
                <div className="navbar navbar-expand-lg">
                    <nav className="nav navbar-nav">
                        <Link to="/" className="nav-item nav-link">Home</Link>
                        <Link to="/sortedGames" className="nav-item nav-link">Games</Link>
                        <SearchBar className="nav-item me-auto"/>
                    </nav>

                </div>
            </div>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/sortedGames" element={<SortedGames/>}/>
                <Route path="/searchedGames" element={<SearchedGames/>}/>
                <Route path="/updateReview/:gameId" element={<UpdateReview/>}/>
            </Routes>
            
            
        </div>
    )
}

