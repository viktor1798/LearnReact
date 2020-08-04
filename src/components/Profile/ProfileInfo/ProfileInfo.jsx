import React from 'react';
import cpi from './ProfileInfo.module.css';


const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://s1.1zoom.ru/big0/235/Poppies_Summer_Grasslands_Trees_562184_1270x1024.jpg"></img>
      </div>
      <div className={cpi.descriptionblock}>
        ava + discription
        </div>
    </div>
  );
}

export default ProfileInfo;