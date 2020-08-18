import React from 'react';
import ReactDOM from 'react-dom';
import '../../index.css';
import {addPost, updateNewText} from './state';
import { BrowserRouter } from 'react-router-dom';
import App from '../../App';


export let rerenderEntireTree= (state)=>{

ReactDOM.render(
  
  <BrowserRouter>
    <App state={state} addPost={addPost} updateNewText = {updateNewText}/>
  </BrowserRouter>,
  document.getElementById('root')
);
}
