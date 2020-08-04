import React from 'react';
import cmi from './MassegeItem.module.css';

const MassegeItem =(props) =>{
    return(
        <div className={cmi.massege_item}>
            {props.massege}
        </div>
    )
}

export default MassegeItem;