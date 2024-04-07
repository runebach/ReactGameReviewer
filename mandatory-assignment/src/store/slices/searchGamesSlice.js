import {createSlice} from "@reduxjs/toolkit"


const initialState = {
    searchTerm: "",
    data: []
}

const searchGamesSlice = createSlice({
    name: "searchedGames",
    initialState,

    reducers: {
        changeSearchTerm: (state, action) => {
            // console.log(action.payload)
            state.searchTerm = action.payload
        }
    }
})


export const {changeSearchTerm} = searchGamesSlice.actions
export const searchGamesReducer = searchGamesSlice.reducer