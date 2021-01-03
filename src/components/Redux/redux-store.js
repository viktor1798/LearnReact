import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profileReduser";
import dialogsReducer from "./dialogsReduser";
import usersReduser from "./usersReduser";
import authReduser from "./authReduser";
import thunkMiddleware from "redux-thunk"

let reducers = combineReducers({
    profilePage: profileReducer,
    massegePage: dialogsReducer,
    usersPage:usersReduser,
    auth:authReduser
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
export default store; 