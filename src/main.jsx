import React from "react";
import ReactDOM from "react-dom/client";
import { FirstApp } from "./FirstApp";
// import { CounterApp } from "./CounterApp";
// import { SecondApp } from "./SecondApp";
import "./index.css";


ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        {/* <CounterApp value={10}/> */}
        <FirstApp title="Hola, No soy Nadie, Soy Vegeta" />
    </React.StrictMode>
);

