import React from 'react';
//cp == classProfile. Подключение к модулю css
import cmp from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {
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
        <Post message='test props' />
        <Post message='double test' />
      </div>
    </div>
  );
}

export default MyPosts;