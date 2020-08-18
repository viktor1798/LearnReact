import React from 'react';
import ReactDOM from 'react-dom';
import store from './components/Redux/state'
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import App from './App';


export let rerenderEntireTree= (state)=>{

ReactDOM.render(
  <BrowserRouter>
    <App state={state} dispatch={store.dispatch.bind(store)} /*updateNewText = {store.updateNewText.bind(store)}>*//>
  </BrowserRouter>,   
  document.getElementById('root')
);
}

store.subscribe(rerenderEntireTree);
rerenderEntireTree(store.GetState());


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
