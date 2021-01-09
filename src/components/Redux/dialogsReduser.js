let SEND_MASSEGE = 'SEND-MASSEGE'

let initialState = {
    
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
    ]
}

//функция отправки сообщений 
const dialogsReduser =(state=initialState, action)=>{
    // if (action.type === WORD_TEXT_MASSEGE) {
    //     state.newMassegeText = action.addWordMassege;
    //     return state;
    // }else if (action.type === SEND_MASSEGE) {
    //     let newMassege = {
    //         id: 4,
    //         massege: state.newMassegeText
    //     };
    //     state.newMassegeText='';
    //     state.massegeDate.push(newMassege);
    //     return state
    // }
   
    switch (action.type) {
        
        case SEND_MASSEGE:{
            let body =action.newMassegeText;
            return {
            ...state, 
            massegeDate:[...state.massegeDate,{id: 4,massege: body}]};
            
        }
    
        default:
            return state;
    }
}
// функции для принятия данных и последующих операций в методе dispatch()

export const sendMassegeAC = (newMessage) => ({ type: SEND_MASSEGE ,newMassegeText: newMessage})


export default dialogsReduser;


