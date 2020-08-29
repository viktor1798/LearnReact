import React from 'react';
import {sendMassegeAC,onMassegeAC} from '../Redux/dialogsReduser';
import Dialogs from './Dialogs';
import StoreContext from '../Redux/StoreContext';


const DialogsContainer = () => {
   return <StoreContext.Consumer>
       {
           store=>{
            let sendMassegeClick =()=>{
                store.dispatch(sendMassegeAC()) 
            }
            let wordMassegeClick =(body)=>{
                store.dispatch(onMassegeAC(body)) 
            }
            return (
                <Dialogs sendMassegeAC={sendMassegeClick} onMassegeAC={wordMassegeClick} massegePage={store.getState().massegePage}/>
            )
           }
       }
   </StoreContext.Consumer> 
}

export default DialogsContainer;



   
    //набор символов в textarae и дальнешее передача действий в файл state.js в метод dispatch()
 
    