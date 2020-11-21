import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReduser";
import dialogsReducer from "./dialogsReduser";
import usersReduser from "./usersReduser";

let reducers = combineReducers({
    profilePage: profileReducer,
    massegePage: dialogsReducer,
    usersPage:usersReduser,
});

let store = createStore(reducers);

window.store = store;
export default store; 