import React from 'react';
import * as axsios from 'axios'
import { connect } from 'react-redux';
import { getAuthUserData } from '../Redux/authReduser'
import Header from './Header';


class HeaderContainer extends React.Component {
    componentDidMount() {
       this.props.getAuthUserData();
    }


    render() {
        return (
            <Header {...this.props} />
        )
    }

}


let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    isAuth: state.auth.login,

})
export default connect(mapStateToProps, { getAuthUserData })(HeaderContainer);