import React from 'react';

//cp == classProfile. Подключение к модулю css
import cmp from './MyPosts.module.css';
import Post from './Post/Post';
import PostReduxForm from './PostForm';



const MyPosts = (props) => {
  //преобразование массива элементов
  let postElement = props.postDate.map((pd) => <Post message={pd.message} likeCount={pd.likeCount} />);
  let wordNewPost = React.createRef();
  //отправка поста
  let addPost = (values) => {
    props.addPostAC(values.addNewPost);
    
  }
  //набор текста сообщений


  return (
    <div className={cmp.posts_block}>
      <h4>my post</h4>
      <PostReduxForm onSubmit={addPost}/>
      <div className={cmp.posts}>
        {/* преобразованный массив элементов */}
        {postElement}
      </div>
    </div>
  );
}



export default MyPosts;