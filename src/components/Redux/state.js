let ADD_POST = 'ADD-POST'
let WORD_TEXT = 'WORD-TEXT'

let SEND_MASSEGE = 'SEND-MASSEGE'
let WORD_TEXT_MASSEGE = 'WORD-TEXT-MASSEGE'


let store = {
    _state: {
        profilePage: {
            postDate: [
                { id: 1, message: 'Hello', likeCount: '10' },
                { id: 2, message: 'I tebye Hello', likeCount: '7' }
            ]
            ,
            newPostText: ''
        }
        ,
        massegePage: {
            dialogDate: [
                { name: 'Kolya', id: 1 },
                { name: 'Alina', id: 2 },
                { name: 'Viktor', id: 3 },
                { name: 'Sasha', id: 4 },
                { name: 'Kate', id: 5 },
                { name: 'Andrey', id: 6 },
            ]
            ,
            massegeDate: [
                { id: 1, massege: 'Hi' },
                { id: 2, massege: 'How are you?' },
                { id: 3, massege: 'Good nigth' }
            ],
            newMassegeText: ''
        }


    },
    GetState() {
        return this._state
    },
    _rerenderEntireTree() {

    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 3,
                message: this._state.profilePage.newPostText,
                likeCount: 1
            };
            this._state.profilePage.postDate.push(newPost);
            this._rerenderEntireTree(this._state);
        } else if (action.type === WORD_TEXT) {
            this._state.profilePage.newPostText = action.addNewWord;
            this._rerenderEntireTree(this._state);
        } else if (action.type === WORD_TEXT_MASSEGE) {
            this._state.massegePage.newMassegeText = action.addWordMassege;
            this._rerenderEntireTree(this._state);
        } if (action.type === SEND_MASSEGE) {
            let newMassege = {
                id: 4,
                massege: this._state.massegePage.newMassegeText
            };
            this._state.massegePage.newMassegeText='';
            this._state.massegePage.massegeDate.push(newMassege);
            this._rerenderEntireTree(this._state);
        }

    },

    // паттерн наблюдатель 
    subscribe(observer) {
        this._rerenderEntireTree = observer;
    }
}

// Тоже самое что и 
// export const addPostAC =()=>{
//     return{
//     type:'ADD-POST'
//     }
// };
export const addPostAC = () => ({ type: ADD_POST });
export const onPostAC = (text) => ({ type: WORD_TEXT, addNewWord: text })

export const onMassegeAC = () => ({ type: SEND_MASSEGE })
export const sendMassegeAC = (body) => ({ type: WORD_TEXT_MASSEGE, addWordMassege: body })


export default store;