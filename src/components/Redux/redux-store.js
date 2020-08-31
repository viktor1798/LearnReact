import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReduser";
import dialogsReducer from "./dialogsReduser";

let reducers = combineReducers({
    profilePage: profileReducer,
    massegePage: dialogsReducer,
});

let store = createStore(reducers);

window.store = store;
export default store; 