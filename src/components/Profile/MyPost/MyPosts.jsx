import React from 'react';
//cp == classProfile. Подключение к модулю css
import cmp from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = (props) => {

  let postElement = props.postDate.map(
    (pd) => <Post
      message={pd.message}
      likeCount={pd.likeCount} />
  );
  let wordNewPost = React.createRef();


  let addPost = () => {
    props.dispatch({type:'ADD-POST'});
    wordNewPost.current.value = '';
  }
  let onPost = () => {
    let text = wordNewPost.current.value;
    props.dispatch({type:'WORD-TEXT',addNewWord: text});
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
        {postElement}
      </div>
    </div>
  );
}

export default MyPosts;