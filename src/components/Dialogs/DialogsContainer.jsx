import React from 'react';
import {sendMassegeAC} from '../Redux/dialogsReduser';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import withAuthRedirect from '../hoc/withAuthRedirect';
import { compose } from 'redux';



let mapStateToProps=(state)=>{
    return{
        massegePage: state.massegePage,

    }
}
let mapDispatchToProps=(dispatch)=>{
    return{
        sendMassegeAC:(newMessage)=>{
            dispatch(sendMassegeAC(newMessage)) 
        },
       
    }
}



/* let AuthRedirectComponent=withAuthRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps) (AuthRedirectComponent); */

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect
)(Dialogs);



   
    //набор символов в textarae и дальнешее передача действий в файл state.js в метод dispatch()
 
    