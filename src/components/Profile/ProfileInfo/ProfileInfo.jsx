import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import cpi from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';


const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div>
      <div className={cpi.descriptionblock}>
        <img src={props.profile.photos.small} />
        <ProfileStatus status={"Memento mori..."}/>
        <div>
          {props.profile.fullName}
        </div>
      
        </div>
    </div>
  );
}

export default ProfileInfo;