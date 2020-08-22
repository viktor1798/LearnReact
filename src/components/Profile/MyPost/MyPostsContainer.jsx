import React from 'react';
//cp == classProfile. Подключение к модулю css
import {onPostAC, addPostAC} from '../../Redux/profileReduser';
import MyPosts from './MyPosts';


const MyPostsContainer = (props) => {
  debugger;
  let state = props.store.getState().profilePage;
//отправка поста
  let addPost = () => {
    props.store.dispatch(addPostAC());
  }
  //набор текста сообщений
  let onPost = (text) => { 
    props.store.dispatch(onPostAC(text));
  }

  return (
    <MyPosts addPostAC={addPost} onPostAC={onPost} profilePage={state}/>
  );
}

export default MyPostsContainer;