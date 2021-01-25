import store from "./redux/redux-store";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SamuraiJSApp from './App';
import {BrowserRouter} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";

ReactDOM.render(<SamuraiJSApp />, document.getElementById('root'));
reportWebVitals();
