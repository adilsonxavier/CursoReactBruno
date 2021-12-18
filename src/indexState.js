﻿import React from "react";
import ReactDOM from "react-dom";
import AppState from "./AppState";
//import App from "./App";
require('file-loader?name=[name].[ext]!./index.html'); // a ausência desta linha gera o erro de directory listing (mostrar o diretório ao invez da página index.html)


const app = document.getElementById("app");


    ReactDOM.render(
        <>
            <AppState />
        </>,

        app
    );
