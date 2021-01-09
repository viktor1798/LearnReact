import React from 'react';
import cd from './Dialogs.module.css'
import DialogsItem from './Dialog/DialogsItem';
import MassegeItem from './Dialog/Massege/MassegeItem';
import { Field, reduxForm } from "redux-form";
import { Redirect } from "react-router-dom";
import DialogReduxForm from './DialogForm';



const Dialogs = (props) => {
    let state = props.massegePage;

    //преобразование массива для пуша новых данных
    let dialogElement = state.dialogDate.map((dd) => <DialogsItem name={dd.name} id={dd.id} />)
    let massegeElement = state.massegeDate.map((md) => <MassegeItem massege={md.massege} />)
    //отправка сообщений и дальнешее передача действий в файл state.js в метод dispatch()

    let addNewMessage = (values) => {
        props.sendMassegeAC(values.newMessage);

    }

    return (
        <div className={cd.dialog}>
            <div className={cd.dialog_item}>
                {/* преобразованный массив элементов */}
                {dialogElement}
            </div>
            <div className={cd.messages}>
                <div>
                    {/* преобразованный массив элементов */}
                    {massegeElement}
                </div>
                <DialogReduxForm onSubmit={addNewMessage} />
            </div>
        </div>
    )
}



export default Dialogs;