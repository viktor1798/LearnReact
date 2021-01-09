import React from 'react';
import { Field, reduxForm } from "redux-form";


const DialogForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>

            <div>
                <Field placeholder={'Enter new message'} name={'newMessage'} component={'textarea'} />
            </div>
            <div>
                {/* кнопка отправки */}
                <button >Send Message</button>
            </div>
        </form>
    )
}

const DialogReduxForm = reduxForm({ form: 'dialogWordMessageArea' })(DialogForm)

export default DialogReduxForm;