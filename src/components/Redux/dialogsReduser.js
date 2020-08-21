let SEND_MASSEGE = 'SEND-MASSEGE'
let WORD_TEXT_MASSEGE = 'WORD-TEXT-MASSEGE'

//функция отправки сообщений 
const dialogsReduser =(state, action)=>{
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
        case WORD_TEXT_MASSEGE:
            state.newMassegeText = action.addWordMassege;
            return state;
        case SEND_MASSEGE:
            let newMassege = {
                id: 4,
                massege: state.newMassegeText
            };
            state.newMassegeText='';
            state.massegeDate.push(newMassege);
            return state;
    
        default:
            return state;
    }
}

export default dialogsReduser;


