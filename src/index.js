import store from "./redux/redux-store";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";


let rerenderEntireTree = () => {
    // debugger;
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <Provider store={store}>
                    <App />
                </Provider>
            </React.StrictMode>,
        </BrowserRouter>, document.getElementById('root')
    );
    reportWebVitals();
}

rerenderEntireTree();

store.subscribe( () => {
        rerenderEntireTree();
});