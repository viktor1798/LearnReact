import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import * as axsios from 'axios'
import { setProfileUser } from '../Redux/profileReduser'


class ProfileConteiner extends React.Component {

    componentDidMount() {
        axsios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setProfileUser(response.data);
            })
    }


    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }


}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})
debugger

export default connect(mapStateToProps, { setProfileUser })(ProfileConteiner);