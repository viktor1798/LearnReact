import React from 'react';
import cd from './Dialogs.module.css'
import DialogsItem from './Dialog/DialogsItem';
import MassegeItem from './Dialog/Massege/MassegeItem';


const Dialogs = (props) => {



    let dialogElement = props.state.dialogDate.map((dd) => <DialogsItem name={dd.name} id={dd.id} />)
    let massegeElement = props.state.massegeDate.map((md) => <MassegeItem massege={md.massege} />)

    return (
        <div className={cd.dialog}>
            <div className={cd.dialog_item}>
                {dialogElement}
            </div>
            <div className={cd.messages}>
                {massegeElement}
                <div>
                    <textarea></textarea>
                    <button>Send Message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;