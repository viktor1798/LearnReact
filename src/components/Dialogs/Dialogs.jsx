import React from 'react';
import cd from './Dialogs.module.css'
import DialogsItem from './Dialog/DialogsItem';
import MassegeItem from './Dialog/Massege/MassegeItem';


const Dialogs = () => {
    let dialogDate = [
        { name: 'Kolya', id: 1 },
        { name: 'Alina', id: 2 },
        { name: 'Viktor', id: 3 },
        { name: 'Sasha', id: 4 },
        { name: 'Kate', id: 5 },
        { name: 'Andrey', id: 6 },
    ]
    let massegeDate = [
        {massege :'Hi'},
        {massege :'How are you?'},
        {massege :'Good nigth'}
    ]
    
    let dialogElement = dialogDate.map((dd)=> <DialogsItem name={dd.name} id={dd.id} />)
    let massegeElement = massegeDate.map((md)=><MassegeItem messages={md.massege}/>)

    return (
        <div className={cd.dialog}>
            <div className={cd.dialog_item}>
                {dialogElement}
            </div>
            <div className={cd.messages}>
                {massegeElement}
            </div>
        </div>
    )
}

export default Dialogs;