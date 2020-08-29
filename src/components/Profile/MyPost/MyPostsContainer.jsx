import React from 'react';
//cp == classProfile. Подключение к модулю css
import {onPostAC, addPostAC} from '../../Redux/profileReduser';
import MyPosts from './MyPosts';
import StoreContext from '../../Redux/StoreContext';


const MyPostsContainer = (props) => {
  return <StoreContext.Consumer>
    {
      store =>{
        let addPost = () => {
          store.dispatch(addPostAC());
        }
        let onPost = (text) => { 
          store.dispatch(onPostAC(text));
        }
        return (
          <MyPosts addPostAC={addPost} onPostAC={onPost} postDate={store.getState().profilePage.postDate} newPostText={store.getState().profilePage.newPostText}/>
        );
      }
      
    }
  </StoreContext.Consumer>
}

export default MyPostsContainer;

//отправка поста

//набор текста сообщений

