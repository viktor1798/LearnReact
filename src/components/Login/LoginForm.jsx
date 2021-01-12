import { Field, reduxForm } from "redux-form";
import React from 'react';
import { Input } from "../common/FormControl/FormControl";
import { required } from "../utils/validator";

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
            <div>
                <button>Sign in</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm) 

export default LoginReduxForm;