import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReduser";
import dialogsReducer from "./dialogsReduser";
import usersReduser from "./usersReduser";
import authReduser from "./authReduser";

let reducers = combineReducers({
    profilePage: profileReducer,
    massegePage: dialogsReducer,
    usersPage:usersReduser,
    auth:authReduser
});

let store = createStore(reducers);

window.store = store;
export default store; 