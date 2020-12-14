import store from "./redux/state";
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
                     addPost={store.addPost.bind(store)}
                     updateNewPostText={store.updateNewPostText.bind(store)}
                     addMessage={store.addMessage.bind(store)}
                     updateNewMessageText={store.updateNewMessageText.bind(store)}/>
            </React.StrictMode>,
        </BrowserRouter>, document.getElementById('root')
    );
    reportWebVitals();
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);