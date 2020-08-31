import React from 'react';
import cd from './Dialogs.module.css'
import DialogsItem from './Dialog/DialogsItem';
import MassegeItem from './Dialog/Massege/MassegeItem';



const Dialogs = (props) => {
    debugger;
    let state = props.massegePage;

    //преобразование массива для пуша новых данных
    let dialogElement = state.dialogDate.map((dd) => <DialogsItem name={dd.name} id={dd.id} />)
    let massegeElement = state.massegeDate.map((md) => <MassegeItem massege={md.massege} />)
    //отправка сообщений и дальнешее передача действий в файл state.js в метод dispatch()
    let newMassegeText = state.newMassegeText;
    let sendMassegeClick =()=>{
        props.sendMassegeAC();
    }
    //набор символов в textarae и дальнешее передача действий в файл state.js в метод dispatch()
    let wordMassegeClick =(event)=>{
        let body =event.target.value;
        props.onMassegeAC(body)
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
                <div>

                    <div>
                        {/* поле ввода */}
                        <textarea value={newMassegeText} 
                        placeholder="Enter new message" 
                        onChange={wordMassegeClick}>
                        </textarea>
                    </div>
                    <div>
                        {/* кнопка отправки */}
                        <button onClick = {sendMassegeClick}>Send Message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;