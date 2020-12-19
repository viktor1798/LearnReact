import React from 'react';
import * as axsios from 'axios'
import { connect } from 'react-redux';
import { setAuthUserData } from '../Redux/authReduser'
import Header from './Header';

class HeaderContainer extends React.Component {
    componentDidMount() {
        axsios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, { withCredentials: true })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let { id, email, login } = response.data.data
                    this.props.setAuthUserData(id, email, login)
                }
            })
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
export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);