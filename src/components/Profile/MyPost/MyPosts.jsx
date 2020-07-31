import React from 'react';
//cp == classProfile. Подключение к модулю css
import cmp from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {
  return (
    <div>
      my post
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={cmp.posts}>
        <Post message = 'test props' />
        <Post message ='double test'/>
      </div>
    </div>
  );
}

export default MyPosts;