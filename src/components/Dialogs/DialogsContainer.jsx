import React from 'react';
import {sendMassegeAC,onMassegeAC} from '../Redux/dialogsReduser';
import Dialogs from './Dialogs';


const DialogsContainer = (props) => {
    let state = props.store.getState().massegePage;
    let sendMassegeClick =()=>{
        props.store.dispatch(sendMassegeAC()) 
    }
    //набор символов в textarae и дальнешее передача действий в файл state.js в метод dispatch()
    let wordMassegeClick =(body)=>{
        props.store.dispatch(onMassegeAC(body)) 
    }
    return (
        <Dialogs sendMassegeAC={sendMassegeClick} onMassegeAC={wordMassegeClick} massegePage={state}/>
    )
}

export default DialogsContainer;