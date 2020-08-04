import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
let postDate = [
  {message: 'Hello', likeCount:'10' },
  {message: 'I tebye Hello', likeCount:'7' }
]
ReactDOM.render(
  
  <React.StrictMode>
    <App postDate ={postDate}/>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
