import React from 'react';
import cd from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';


const Dialogs = () => {
    return (
<div className={cd.dialog}>
    <div className={cd.dialog_item}>
        <div className={cd.item}>
        <NavLink to='/dialogs/1'> Kolya </NavLink>
        </div>
        <div className={cd.item}>
          <NavLink to='/dialogs/2'>  Sveta </NavLink>
        </div>
        <div className={cd.item}>
        <NavLink to='/dialogs/3'> Igor' </NavLink>
        </div>
        <div className={cd.item}>
        <NavLink to='/dialogs/4'> Sasha </NavLink>
        </div>
    </div>
    <div className={cd.messages}>
        <div className={cd.massege_item}>
            Hi!
        </div>
        <div className={cd.massege_item}>
            How are you?
        </div>
        <div className={cd.massege_item}>
            Good nigth
        </div>
    </div>
</div>
    )
}

export default Dialogs;