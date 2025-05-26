import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'
 
// components
import Home from './components/Home';
 
const root= ReactDOM.createRoot(document.getElementById("root"));
let time=0;
setInterval(() => {
  time++;

root.render(
  <React.StrictMode>
    <Home time={time}/>
  </React.StrictMode>,
)
}, 1000)