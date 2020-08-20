import React from 'react';
import cd from './Dialogs.module.css'
import DialogsItem from './Dialog/DialogsItem';
import MassegeItem from './Dialog/Massege/MassegeItem';


const Dialogs = (props) => {



    let dialogElement = props.state.dialogDate.map((dd) => <DialogsItem name={dd.name} id={dd.id} />)
    let massegeElement = props.state.massegeDate.map((md) => <MassegeItem massege={md.massege} />)


    let sendMassegeClick =()=>{


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
                        <textarea placeholder="Enter new message"></textarea>
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