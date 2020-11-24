import React from 'react';
import cpr from './Profile.module.css';
import MyPostsContainer from './MyPost/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {

    return (
        <div className={cpr.content}>
            <ProfileInfo props={props.profile}/>
            <MyPostsContainer />
        </div>
    );
}

export default Profile;