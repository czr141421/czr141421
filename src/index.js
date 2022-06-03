import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import RouterConfig from "./Router/index.js";
import * as serviceWorker from "./serviceWorker";

function render() {
    ReactDOM.render(<RouterConfig />, document.getElementById("root"));
}

if (!window.__POWERED_BY_QIANKUN__) {
    render();
}

export async function bootstrap() {}

export async function mount() {
    render();
}

export async function unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById("root"));
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
