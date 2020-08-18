import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import state from './components/Redux/state';
import {addPost, updateNewText, callbackToIndex} from './components/Redux/state';
import { BrowserRouter } from 'react-router-dom';
import App from './App';


export let rerenderEntireTree= (state)=>{

ReactDOM.render(
  <BrowserRouter>
    <App state={state} addPost={addPost} updateNewText = {updateNewText}/>
  </BrowserRouter>,
  document.getElementById('root')
);
}

callbackToIndex(rerenderEntireTree);
rerenderEntireTree(state);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
