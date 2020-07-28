import React from 'react';
//cp == classProfile. Подключение к модулю css
import cmp from'./MyPosts.module.css';


const MyPosts = () =>{
    return(
<div>
  my post
    <div>
      new post
    </div>
    <div className= {cmp.posts}>
        <div className={cmp.item}>
          post1
        </div>
        <div className={cmp.item}>
          post2
        </div>
    </div>
</div>
      
    );
}

export default MyPosts;