import { Field, reduxForm } from "redux-form";
import React from 'react';

const LoginForm = (props) => {
    return (
        <form>
            <div>
                <Field placeholder={"Login"} name={"login"} component={"input"} />
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={"input"} />
            </div>
            <div>
                <Field component={"input"} name={"rememberMe"} type={"checkbox"} /> Remember Me
            </div>
            <div>
                <button>Sign in</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm) 

export default LoginReduxForm;