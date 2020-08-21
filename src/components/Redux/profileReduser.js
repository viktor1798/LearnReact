let ADD_POST = 'ADD-POST'
let WORD_TEXT = 'WORD-TEXT'

// функция добавление постов
const profileReduser = (state, action) => {
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
            state.newPostText = '';
            state.postDate.push(newPost);
            return state;

        case WORD_TEXT:
            state.newPostText = action.addNewWord;
            return state;


        default:
            return state;
    }


}

export default profileReduser;


