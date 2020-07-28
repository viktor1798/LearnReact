import React from 'react';
//cp == classProfile. Подключение к модулю css
import cp from'./Post.module.css';


const Post = () =>{
    return(
<div className= {cp.posts}>      
  <div className={cp.item}>
    <img src="https://upload.wikimedia.org/wikipedia/commons/f/f5/Pic-vk-allaboutme-ava-2.jpg"></img>
    post
  </div>
</div>
);
}

export default Post;