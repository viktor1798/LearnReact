import React from 'react';
//cp == classProfile. Подключение к модулю css
import cp from'./Profile.module.css';


const Profile = () =>{
    return(
    <div className={cp.content}>
        <div>
          <img src="https://s1.1zoom.ru/big0/235/Poppies_Summer_Grasslands_Trees_562184_1270x1024.jpg"></img>
        </div>
    <div>
          ava + discription
    </div>
        <div>
          my post
            <div>
              new post
            </div>
            <div className= {cp.posts}>
              <div className={cp.item}>
                post1
              </div>
              <div className={cp.item}>
                post2
              </div>
            </div>
        </div>
      </div>
    );
}

export default Profile;