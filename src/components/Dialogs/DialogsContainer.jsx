import React from 'react';
import {sendMassegeAC,onMassegeAC} from '../Redux/dialogsReduser';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';


debugger;
let mapStateToProps=(state)=>{
    return{
        massegePage: state.massegePage
    }
}
let mapDispatchToProps=(dispatch)=>{
    return{
        onMassegeAC:()=>{
            dispatch(sendMassegeAC()) 
        },
        sendMassegeAC:(body)=>{
            dispatch(onMassegeAC(body)) 
        }
    }
}
const DialogsContainer = connect(mapStateToProps,mapDispatchToProps) (Dialogs);

export default DialogsContainer;



   
    //набор символов в textarae и дальнешее передача действий в файл state.js в метод dispatch()
 
    