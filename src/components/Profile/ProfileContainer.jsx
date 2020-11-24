import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import * as axsios from 'axios'
import { setProfileUser } from '../Redux/profileReduser'
import { withRouter } from 'react-router-dom';


class ProfileConteiner extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = 12783;
        }
        axsios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
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
let WithDataContainerComponent = withRouter(ProfileConteiner);



export default connect(mapStateToProps, { setProfileUser })(WithDataContainerComponent);