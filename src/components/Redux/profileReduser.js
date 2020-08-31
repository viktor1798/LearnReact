let ADD_POST = 'ADD-POST'
let WORD_TEXT = 'WORD-TEXT'

let initialState = {
    postDate: [
        { id: 1, message: 'Hello', likeCount: '10' },
        { id: 2, message: 'I tebye Hello', likeCount: '7' }
    ]
    ,
    newPostText: ''
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
        case ADD_POST: {
            let newPost = {
                id: 3,
                message: state.newPostText,
                likeCount: 1
            };
            let stateCopy = {...state};
            stateCopy.postDate = [...state.postDate];
            stateCopy.postDate.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case WORD_TEXT:
            state.newPostText = action.addNewWord;
            return state;
        default:
            return state;
    }


}
// функции для принятия данных и последующих операций в методе dispatch()

export const addPostAC = () => ({ type: ADD_POST });
export const onPostAC = (text) => ({ type: WORD_TEXT, addNewWord: text })

export default profileReduser;


