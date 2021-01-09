import React from 'react';
//cp == classProfile. Подключение к модулю css
import { addPostAC} from '../../Redux/profileReduser';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';



let mapStateToProps=(state)=>{
  return{
  postDate:state.profilePage.postDate,
  newPostText : state.profilePage.newPostText}
}
let mapDispatchToProps=(dispatch)=>{
  return{
    addPostAC:(addNewPost)=>{
      dispatch(addPostAC(addNewPost));
    }
  }
}
const MyPostsContainer = connect (mapStateToProps,mapDispatchToProps)(MyPosts)

export default MyPostsContainer;

//отправка поста

//набор текста сообщений

