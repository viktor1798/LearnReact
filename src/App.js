//выравнивание кода ctrl+k+f
import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import { Route, BrowserRouter, withRouter } from 'react-router-dom';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';
import News from './components/News/News';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersCountainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { compose } from 'redux';
import { initializeApp } from "./components/Redux/appReduser"
import { connect } from 'react-redux';
import Preloader from './components/common/Preloader/Preloader';

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      //Компонента BR которая позволяет делать мнгноввеный перехо, также эта страница главная, и предназначена для 
      // компонент других страниц

      <div className="app-wrapper">
        <HeaderContainer />
        <Nav />
        <div className="app-wrapper-content">
          {/* path- делает нужный URL, render указывает на страницу по которой идет данный URL */}
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path='/music' render={() => <Music />} />
          <Route path='/setting' render={() => <Setting />} />
          <Route path='/news' render={() => <News />} />
          <Route path="/users" render={() => <UsersCountainer />} />
          <Route path="/login" render={() => <Login />} />
        </div>
      </div>

    )
  }
}
const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})


export default compose(withRouter, connect(mapStateToProps, { initializeApp }))(App);
