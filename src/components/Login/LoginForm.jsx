import { Field, reduxForm } from "redux-form";
import React from 'react';
import { Input } from "../common/FormControl/FormControl";
import { required } from "../utils/validator";
import styles from './../common/FormControl/FormsControls.module.css'

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div >
                <Field placeholder={"Email"} name={"email"} component={Input} validate={[required]}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={Input} type={"password"} validate={[required]} />
            </div>
            <div>
                <Field component={Input} name={"rememberMe"} type={"checkbox"} /> Remember Me
            </div>
            { props.error &&<div className ={styles.formSummaryError} >
                {props.error}
                </div>}
            <div>
                <button>Sign in</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm) 

export default LoginReduxForm;