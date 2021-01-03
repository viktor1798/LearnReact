import { Switch } from "react-router-dom";
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
                ...action.data,
                isAuth:true
            }
        }
    
        default:
            return state;
    
    }
}
// функции для принятия данных и последующих операций в методе dispatch()


export const setAuthUserData = (id, email, login) => ({ type: SET_AUTH_USER_DATA, data: { id, email, login } })

export const getAuthUserData = ()=>(dispatch)=>{
    authAPI.me()
    .then(response => {
        if (response.data.resultCode === 0) {
            let { id, email, login } = response.data.data
            dispatch(setAuthUserData(id, email, login))
        }
    })
}
export default dialogsReduser;


