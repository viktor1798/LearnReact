import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import cpi from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div>
      <div>
        <img src="https://s1.1zoom.ru/big0/235/Poppies_Summer_Grasslands_Trees_562184_1270x1024.jpg"></img>
      </div>
      <div className={cpi.descriptionblock}>
        <img src={props.profile.photos.small} />
        ava + discription
        <div>
          {props.profile.fullName}
        </div>
      
        </div>
    </div>
  );
}

export default ProfileInfo;