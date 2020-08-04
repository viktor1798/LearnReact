import React from 'react';
import { NavLink } from 'react-router-dom';
import cdi from './DialogsItem.module.css';

const DialogsItem = (props) =>{
    let urlname = '/dialogs/' + props.id; 
    return(
        <div className={cdi.item}>
        <NavLink to={urlname}> {props.name} </NavLink>
        </div>
    )
}

export default DialogsItem;