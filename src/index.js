import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


let postDate = [
  {message: 'Hello', likeCount:'10' },
  {message: 'I tebye Hello', likeCount:'7' }
]
let dialogDate = [
  { name: 'Kolya', id: 1 },
  { name: 'Alina', id: 2 },
  { name: 'Viktor', id: 3 },
  { name: 'Sasha', id: 4 },
  { name: 'Kate', id: 5 },
  { name: 'Andrey', id: 6 },
]
let massegeDate = [
  {massege :'Hi'},
  {massege :'How are you?'},
  {massege :'Good nigth'}
]


ReactDOM.render(
  
  <React.StrictMode>
    <App postDate ={postDate} dialogDate={dialogDate} massegeDate={massegeDate}/>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
