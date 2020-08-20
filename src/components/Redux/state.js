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
                { massege: 'Hi' },
                { massege: 'How are you?' },
                { massege: 'Good nigth' }
            ]
        }


    },
    GetState() {
        return this._state
    },
    _rerenderEntireTree() {

    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 3,
                message: this._state.profilePage.newPostText,
                likeCount: 1
            };
            this._state.profilePage.postDate.push(newPost);
            this._rerenderEntireTree(this._state);
        } else if (action.type === 'WORD-TEXT') {
            this._state.profilePage.newPostText = action.addNewWord;
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
export const addPostAC =()=>({type:'ADD-POST'});
export const onPostAC =(text)=>({type:'WORD-TEXT',addNewWord: text})

export default store;