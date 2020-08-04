import React from 'react';
//cp == classProfile. Подключение к модулю css
import cmp from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = (props) => {
  
  let postElement = props.postDate.map((pd)=> <Post message={pd.message} likeCount = {pd.likeCount} />)
  return (
    <div className= {cmp.posts_block}>
      <h4>my post</h4>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={cmp.posts}>
        {postElement}
      </div>
    </div>
  );
}

export default MyPosts;