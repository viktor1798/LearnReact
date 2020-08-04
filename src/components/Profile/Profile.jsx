import React from 'react';
import cpr from'./Profile.module.css';
import MyPosts from './MyPost/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = () =>{
    return(
    <div className={cpr.content}>
    <ProfileInfo/> 
    <MyPosts/>
    </div>
    );
}

export default Profile;