import React from 'react';
//cp == classProfile. Подключение к модулю css
import cmp from './MyPosts.module.css';
import Post from './Post/Post';
import {onPostAC, addPostAC} from '../../Redux/store';


const MyPosts = (props) => {
  //преобразование массива элементов
  let postElement = props.postDate.map(
    (pd) => <Post
      message={pd.message}
      likeCount={pd.likeCount} />
  );
  let wordNewPost = React.createRef();
//отправка поста
  let addPost = () => {
    props.dispatch(addPostAC());
    wordNewPost.current.value = '';
  }
  //набор текста сообщений
  let onPost = (event) => { 
    let text = event.target.value;
    props.dispatch(onPostAC(text));
  }

  return (
    <div className={cmp.posts_block}>
      <h4>my post</h4>
      <div>
        <div>
          <textarea onChange={onPost} ref={wordNewPost}></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={cmp.posts}>
        {/* преобразованный массив элементов */}
        {postElement}
      </div>
    </div>
  );
}

export default MyPosts;