let store = {
    _state :{
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
    addPost() {
        let newPost = {
            id: 3,
            message: this._state.profilePage.newPostText,
            likeCount: 1
        };
        this._state.profilePage.postDate.push(newPost);
        this._rerenderEntireTree(this._state);
    },

    updateNewText(addNewWord) {
        this._state.profilePage.newPostText = addNewWord;
        this._rerenderEntireTree(this._state);
    },

    // паттерн наблюдатель 
    subscribe(observer) {
        this._rerenderEntireTree = observer;
    }
}

export default store;