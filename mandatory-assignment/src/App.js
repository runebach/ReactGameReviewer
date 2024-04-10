import {Routes, Route, Link} from "react-router-dom"

import Home from "./components/home"
import SearchBar from "./components/searchBar"
import SearchedGames from "./components/searchedGames"
import UpdateReview from "./components/updateReview"


export default function App() {
//     let searchBar
//         if(window.location.href ===  window.location.prigin + "/searchedGames"){
//             return <SearchBar className="nav-item me-auto"/>
//         }
    return(
        <div className="container is-fluid">
            <div className="py-3">
                <div className="navbar navbar-expand-lg">
                    <nav className="nav navbar-nav">
                        <Link to="/" className="nav-item nav-link">Home</Link>
                        <Link to="/searchedGames" className="nav-item nav-link">Games</Link>
                        <SearchBar className="nav-item me-auto"/>
                        {/* {searchBar} */}
                    </nav>

                </div>
            </div>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/searchedGames" element={<SearchedGames/>}/>
                <Route path="/updateReview/:gameId" element={<UpdateReview/>}/>
            </Routes>
            
            
        </div>
    )
}

