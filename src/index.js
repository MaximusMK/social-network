import state, {subscribe} from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import {addMessage, addPost, updateNewMessageText, updateNewPostText} from "./redux/state";


let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={state}
                     addPost={addPost}
                     updateNewPostText={updateNewPostText}
                     addMessage={addMessage}
                     updateNewMessageText={updateNewMessageText}/>
            </React.StrictMode>,
        </BrowserRouter>, document.getElementById('root')
    );
    reportWebVitals();
}

rerenderEntireTree(state);

subscribe(rerenderEntireTree);