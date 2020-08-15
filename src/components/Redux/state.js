let State = {
    profilePage: {
        postDate: [
            {id:1, message: 'Hello', likeCount: '10' },
            {id:2, message: 'I tebye Hello', likeCount: '7' }
        ]
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

export let addPost = (addNewPost) =>{
    debugger;
    let newPost = {
        id:3,
        message: addNewPost,
        likeCount:1
    }

    State.profilePage.postDate.push(newPost);
}





export default State;