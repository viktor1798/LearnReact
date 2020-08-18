import { rerenderEntireTree } from "./render";

let state = {
    profilePage: {
        postDate: [
            {id:1, message: 'Hello', likeCount: '10' },
            {id:2, message: 'I tebye Hello', likeCount: '7' }
        ]
        ,
        newPostText: ''
    }
    ,
    massegePage:{
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
    

};

export let addPost = ( addNewPost) =>{
    let newPost = {
        id:3,
        message: addNewPost,
        likeCount:1
    }

    state.profilePage.postDate.push(newPost);
    rerenderEntireTree(state);
}


export let updateNewText = ( addNewWord) =>{
    state.profilePage.newPostText = addNewWord;
    rerenderEntireTree(state);
}





export default state;