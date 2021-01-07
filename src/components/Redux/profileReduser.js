import { profileAPI, usersAPI } from '../api/api'

let ADD_POST = 'ADD-POST'
let WORD_TEXT = 'WORD-TEXT'
let SET_PROFILE_USER = 'SET_PROFILE_USER'
let SET_STATUS = 'SET_STATUS'


let initialState = {
    postDate: [
        { id: 1, message: 'Hello', likeCount: '10' },
        { id: 2, message: 'I tebye Hello', likeCount: '7' }
    ]
    ,
    newPostText: '',
    profile: null,
    status: ""
}

// функция добавление постов
const profileReduser = (state = initialState, action) => {
    // if (action.type === ADD_POST) {
    //     let newPost = {
    //         id: 3,
    //         message: state.newPostText,
    //         likeCount: 1
    //     };
    //     state.newPostText='';
    //     state.postDate.push(newPost);
    //     return state;
    // } else if (action.type === WORD_TEXT) {
    //     state.newPostText = action.addNewWord;
    //     return state;
    // } 
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                message: state.newPostText,
                likeCount: 1
            };
            return {
                ...state,
                postDate: [...state.postDate, newPost],
                newPostText: ''
            }

        case WORD_TEXT:
            return {
                ...state,
                newPostText: action.addNewWord
            }
        case SET_PROFILE_USER: {
            return { ...state, profile: action.profile }
        }
        case SET_STATUS: {
            return { ...state, status: action.status }
        }
        default:
            return state;
    }


}
// функции для принятия данных и последующих операций в методе dispatch()

export const addPostAC = () => ({ type: ADD_POST });
export const onPostAC = (text) => ({ type: WORD_TEXT, addNewWord: text })
export const setProfileUser = (profile) => ({ type: SET_PROFILE_USER, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })

export const getProfileUser = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setProfileUser(response.data));
    });
}

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setStatus(response.data));
    });
}
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    });
}

export default profileReduser;


