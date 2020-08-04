import React from 'react';
//cp == classProfile. Подключение к модулю css
import cmp from './MyPosts.module.css';
import Post from './Post/Post';
let postDate = [
  {message: 'Hello', likeCount:'10' },
  {message: 'I tebye Hello', likeCount:'7' }
]

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
        <Post message={postDate[0].message} likeCount = {postDate[0].likeCount} />
        <Post message={postDate[1].message} likeCount ={postDate[1].likeCount} />
      </div>
    </div>
  );
}

export default MyPosts;