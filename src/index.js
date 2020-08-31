import * as serviceWorker from './serviceWorker';
import store from './components/Redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import { Provider } from 'react-redux';



ReactDOM.render(
  <BrowserRouter>
    <Provider store ={store}>
    {/*Отправка данных чеstate={state} dispatch={store.dispatch.bind(store)} store = {store}рез пропсы в компоненту Арр из state.js  */}
      <App />
    </Provider>
  </BrowserRouter>,   
  document.getElementById('root')
);


//store.subscribe(rerenderEntireTree);
// rerenderEntireTree(store.getState());
// store.subscribe(() => {
//   let state = store.getState();
//   rerenderEntireTree(state);
// });

// rerenderEntireTree();
// store.subscribe(() => {
//   rerenderEntireTree();
// });


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
