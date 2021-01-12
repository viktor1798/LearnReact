import React from 'react';
import { Field, reduxForm } from "redux-form";
import { Textarea } from '../common/FormControl/FormControl';
import { maxLengthCreator, required } from '../utils/validator';

let maxLenght100 = maxLengthCreator(100)
const DialogForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>

            <div>
                <Field placeholder={'Enter new message'} name={'newMessage'} component={Textarea} validate={[required,maxLenght100]} />
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