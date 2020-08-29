import React from 'react';
import cpr from './Profile.module.css';
import MyPostsContainer from './MyPost/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = () => {

    return (
        <div className={cpr.content}>
            <ProfileInfo />
            <MyPostsContainer />
        </div>
    );
}

export default Profile;