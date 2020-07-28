import React from 'react';
import './Profile.css';

const Profile = () =>{
    return(
    <div className="content">
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
            <div className= "posts">
              <div className="item">
                post1
              </div>
              <div className="item">
                post2
              </div>
            </div>
        </div>
      </div>
    );
}

export default Profile;