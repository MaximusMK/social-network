import store from "./redux/redux-store";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import reportWebVitals from './reportWebVitals';

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={state}
                     dispatch={store.dispatch.bind(store)}/>
            </React.StrictMode>,
        </BrowserRouter>, document.getElementById('root')
    );
    reportWebVitals();
}

rerenderEntireTree(store.getState());

store.subscribe( () => {
    let state = store.getState();
    rerenderEntireTree(state);
});