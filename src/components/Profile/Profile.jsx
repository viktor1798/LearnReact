import React from 'react';
import cpr from'./Profile.module.css';
import MyPosts from './MyPost/MyPosts';


const Profile = () =>{
    return(
    <div className={cpr.content}>
      <div>
          <img src="https://s1.1zoom.ru/big0/235/Poppies_Summer_Grasslands_Trees_562184_1270x1024.jpg"></img>
        </div>
        <div>
          ava + discription
        </div>
      <MyPosts/>
    </div>
    );
}

export default Profile;