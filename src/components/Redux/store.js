import profileReduser from "./profileReduser"
import dialogsReduser from "./dialogsReduser"

let ADD_POST = 'ADD-POST'
let WORD_TEXT = 'WORD-TEXT'

let SEND_MASSEGE = 'SEND-MASSEGE'
let WORD_TEXT_MASSEGE = 'WORD-TEXT-MASSEGE'


let store = {
    // набор обектов и массивов
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
    // метод вызова обьектов для передачи по пропсам 
    GetState() {
        return this._state
    },
    //пустой метод для перересовки страницы SPA
    _rerenderEntireTree() {

    },
    // метод для выполнение функции отправки сообщений и добавление постов
     dispatch(action) {
         //отправка данных объектов в функции Reduser
        this._state.profilePage= profileReduser(this._state.profilePage, action);
        this._state.massegePage = dialogsReduser(this._state.massegePage, action);
             this._rerenderEntireTree(this._state);

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

// функции для принятия данных и последующих операций в методе dispatch()
export const addPostAC = () => ({ type: ADD_POST });
export const onPostAC = (text) => ({ type: WORD_TEXT, addNewWord: text })

export const sendMassegeAC = () => ({ type: SEND_MASSEGE })
export const  onMassegeAC = (body) => ({ type: WORD_TEXT_MASSEGE, addWordMassege: body })


export default store;