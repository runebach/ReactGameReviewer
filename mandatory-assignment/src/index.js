import "bootstrap/dist/css/bootstrap.css"
import React from "react"
import {createRoot} from "react-dom/client"
import {BrowserRouter} from "react-router-dom"
import App from "./App"
import {Provider} from "react-redux"
import {store} from "./store"


const el = document.getElementById("root")
const root = createRoot(el)


root.render(
        <BrowserRouter>
                <Provider store={store}>
                        <App/>
                </Provider>
        </BrowserRouter>

)