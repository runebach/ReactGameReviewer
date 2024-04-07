import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query"
import {gameApi} from "./apis/gameApi"
import { searchGamesReducer, changeSearchTerm } from "./slices/searchGamesSlice";
import {changeReviewReducer, changeReview} from "./slices/updateReviewSlice"


export const store = configureStore({
    reducer: {
        // her skal indsættes en reducer fra API slicen der kan gette alle objekter (og måske poste)
        [gameApi.reducerPath]: gameApi.reducer,
        searchedGames: searchGamesReducer,
        updateReview: changeReviewReducer

    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(gameApi.middleware) // her skal indsættes api.middleware fra api slice
    }
})


setupListeners(store.dispatch)

export {useFetchSortedGamesQuery} from "./apis/gameApi"
export {useUpdateGameMutation} from "./apis/gameApi"
export {useFetchGameByIdQuery} from "./apis/gameApi"
export {changeSearchTerm}
export {changeReview}