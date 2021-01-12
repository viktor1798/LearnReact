import { Switch } from "react-router-dom";
import { stopSubmit } from "redux-form";
import { authAPI } from '../api/api';

let SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'




let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth:false
}

//функция отправки сообщений 
const dialogsReduser = (state = initialState, action) => {

    switch (action.type) {
        case SET_AUTH_USER_DATA: {
            return {
                ...state,
                ...action.payload
            }
        }
    
        default:
            return state;
    
    }
}
// функции для принятия данных и последующих операций в методе dispatch()


export const setAuthUserData = (id, email, login, isAuth) => ({ type: SET_AUTH_USER_DATA, payload: { id, email, login, isAuth } })

export const getAuthUserData = ()=>(dispatch)=>{
    return authAPI.me()
    .then(response => {
        if (response.data.resultCode === 0) {
            let { id, email, login } = response.data.data
            dispatch(setAuthUserData(id, email, login, true))
        }
    })
}

export const login = (email, password, rememberMe)=>(dispatch)=>{
    authAPI.login(email, password, rememberMe)
    .then(response => {
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData())
        }else{
            let message = response.data.messages.length > 0 ? response.data.messages[0] : "some error"
            dispatch(stopSubmit("login", {_error:message}));
        }
    })
}

export const logout = ()=>(dispatch)=>{
    authAPI.logout()
    .then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    })
}

export default dialogsReduser;


