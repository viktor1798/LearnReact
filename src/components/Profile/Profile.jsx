import React from 'react';
import cpr from './Profile.module.css';
import MyPosts from './MyPost/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {

    return (
        <div className={cpr.content}>
            <ProfileInfo />
            <MyPosts
                postDate={props.state.postDate}
                addPost={props.addPost}
                updateNewText = {props.updateNewText} />
        </div>
    );
}

export default Profile;