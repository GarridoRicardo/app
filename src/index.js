//1)Tiene que estar la variable React en scope
import React from "react"

//2)Tiene que estar la variable ReactDOM en scope
import ReactDOM from "react-dom"

//3)importamos componente
import App from "./App"

//4)importamos Estilos
import "./estilos.css"

//4)Tengo que renderizar el elemento
ReactDOM.render( <App/> , document.getElementById("root") )
