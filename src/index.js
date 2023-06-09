import React from 'react'
import './index.css'
import App from './App'
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";

ReactDOM.render((
  <BrowserRouter>
    <App />
    </BrowserRouter>
),
  document.getElementById('root')
)
