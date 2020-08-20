import React from 'react';
import cd from './Dialogs.module.css'
import DialogsItem from './Dialog/DialogsItem';
import MassegeItem from './Dialog/Massege/MassegeItem';
import {sendMassegeAC,onMassegeAC} from '../Redux/state';


const Dialogs = (props) => {
    let state= props.store.GetState().massegePage;


    let dialogElement = state.dialogDate.map((dd) => <DialogsItem name={dd.name} id={dd.id} />)
    let massegeElement = state.massegeDate.map((md) => <MassegeItem massege={md.massege} />)

    let newMassegeText = state.newMassegeText;
    let sendMassegeClick =()=>{
        props.store.dispatch(sendMassegeAC()) 
    }
    let wordMassegeClick =(event)=>{
        let body =event.target.value;
        props.store.dispatch(onMassegeAC(body)) 
    }
    return (
        <div className={cd.dialog}>
            <div className={cd.dialog_item}>
                {dialogElement}
            </div>
            <div className={cd.messages}>
                <div>
                    {massegeElement}
                </div>
                <div>

                    <div>
                        <textarea value={newMassegeText} 
                        placeholder="Enter new message" 
                        onChange={wordMassegeClick}>
                        </textarea>
                    </div>
                    <div>
                        <button onClick = {sendMassegeClick}>Send Message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;