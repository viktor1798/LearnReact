import React from 'react';
import cd from './Dialogs.module.css'
import DialogsItem from './Dialog/DialogsItem';
import MassegeItem from './Dialog/Massege/MassegeItem';

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



const Dialogs = () => {
    return (
        <div className={cd.dialog}>
            <div className={cd.dialog_item}>
                <DialogsItem name={dialogDate[0].name} id={dialogDate[0].id} />
                <DialogsItem name={dialogDate[1].name} id={dialogDate[1].id} />
                <DialogsItem name={dialogDate[2].name} id={dialogDate[2].id} />
                <DialogsItem name={dialogDate[3].name} id={dialogDate[3].id} />
                <DialogsItem name={dialogDate[4].name} id={dialogDate[4].id} />
                <DialogsItem name={dialogDate[5].name} id={dialogDate[5].id} />
            </div>
            <div className={cd.messages}>
                <MassegeItem massege={massegeDate[0].massege} />
                <MassegeItem massege={massegeDate[1].massege} />
                <MassegeItem massege={massegeDate[2].massege} />
            </div>
        </div>
    )
}

export default Dialogs;