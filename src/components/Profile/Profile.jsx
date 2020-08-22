import React from 'react';
import cpr from './Profile.module.css';
import MyPosts from './MyPost/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {

    return (
        <div className={cpr.content}>
            <ProfileInfo />
            <MyPosts
                store = {props.store}
                // postDate={props.state.postDate}
                dispatch={props.dispatch} />
        </div>
    );
}

export default Profile;