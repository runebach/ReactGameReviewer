import {createSlice} from "@reduxjs/toolkit"
import {useUpdateGameMutation} from "../index"

const initialState = {
    gameData: [],
}

const changeReviewSlice = createSlice({
    name: "updateReview",
    initialState,

    reducers: {
        changeReview: (state, action) => {
            const {gameId, review} = action.payload
            

            const gameIndex = state.gameData.findIndex(game => game.id === gameId)
            if(gameIndex !== -1){
                state.gameData[gameIndex].review = review
            }
            console.log("GameData:" + initialState.gameData)
        }
    }
})

export const {changeReview} = changeReviewSlice.actions
export const changeReviewReducer = changeReviewSlice.reducer