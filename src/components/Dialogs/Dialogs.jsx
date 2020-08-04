import React from 'react';
import cd from './Dialogs.module.css'


const Dialogs = () => {
    return (
<div className={cd.dialog}>
    <div className={cd.dialog_item}>
        <div className={cd.item}>
            Kolya
        </div>
        <div className={cd.item + ' ' + cd.active}>
            Sveta
        </div>
        <div className={cd.item}>
            Igor'
        </div>
        <div className={cd.item}>
            Sasha
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