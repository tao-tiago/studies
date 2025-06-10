import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import Layout from "./pages/Home"
import store from "./app/store"

import { Provider } from "react-redux"
import { GlobalProvider } from "./context/DataContext"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalProvider>
        <Layout />
      </GlobalProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)
