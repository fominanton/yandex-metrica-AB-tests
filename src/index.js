import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {YMInitializer} from "react-yandex-metrika";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <YMInitializer accounts={[987654321]}/>
        <App/>
    </React.StrictMode>,
);

