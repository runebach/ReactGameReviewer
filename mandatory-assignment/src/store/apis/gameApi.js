import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"


export const gameApi = createApi({
    reducerPath: "gameApi", // navnet på dennes reducerpath. skal kaldes i andre filer?
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3005" // Base url til api kald. vi bruger en json server som RestApi
    }),
    endpoints(builder){
        return{
            fetchSortedGames: builder.query({
                query: () => {
                    const requestData = {
                        url: "/games", // url to get games
                        params: {
                        },
                        method: "GET"
                    }
                    return requestData
                    
                    
                }
            }),
            fetchGameById: builder.query({
                query: (gameId) => {
                    const requestData = {
                        url: "/games/" + gameId,
                        params: {

                        },
                        method: "GET"
                    }
                    return requestData
                }
            }),
            updateGame: builder.mutation({
                query: ({gameId, updatedGame}) => {
                    const requestData = {
                        url: "/games/" + gameId,
                        params: {

                        },
                        method: "PUT",
                        body: updatedGame
                    }
                    return requestData
                }
            })
        }
    }
})

export const {useFetchSortedGamesQuery} = gameApi
export const {useUpdateGameMutation} = gameApi
export const {useFetchGameByIdQuery} = gameApi
