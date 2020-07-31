import React from 'react';
//cp == classProfile. Подключение к модулю css
import cp from './Post.module.css';


const Post = (props) => {
  return (
    <div className={cp.posts}>
      <div className={cp.item}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/f/f5/Pic-vk-allaboutme-ava-2.jpg"></img>
        {props.message}
      </div>
      <div className={cp.posts}>
        <span>Like</span>
      </div>
    </div>
  );
}

export default Post;