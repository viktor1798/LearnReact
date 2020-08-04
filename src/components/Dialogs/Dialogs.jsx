import React from 'react';
import cd from './Dialogs.module.css'
import DialogsItem from './Dialog/DialogsItem';



const MassegeItem =(props) =>{
    return(
        <div className={cd.massege_item}>
            {props.massege}
        </div>
    )
}

const Dialogs = () => {
    return (
<div className={cd.dialog}>
    <div className={cd.dialog_item}>
        <DialogsItem name = 'Kolya' id ='1'/>
        <DialogsItem name = 'Alina' id ='2'/>
        <DialogsItem name = 'Viktor' id ='3'/>
        <DialogsItem name = 'Sasha' id ='4'/>
        <DialogsItem name = 'Kate' id ='5'/>
        <DialogsItem name = 'Andrey' id ='6'/>
    </div>
    <div className={cd.messages}>
        <MassegeItem massege='Hi'/>
        <MassegeItem massege='How are you?'/>
        <MassegeItem massege='Good nigth'/>
    </div>
</div>
    )
}

export default Dialogs;