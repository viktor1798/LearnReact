//выравнивание кода ctrl+k+f
import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import { Route, BrowserRouter } from 'react-router-dom';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';
import News from './components/News/News';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Users from './components/Users/Users';
import UsersCountainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';



const App = () => {
  return (
    //Компонента BR которая позволяет делать мнгноввеный перехо, также эта страница главная, и предназначена для 
    // компонент других страниц

    <div className="app-wrapper">
      <Header />
      <Nav />
      <div className="app-wrapper-content">
        {/* path- делает нужный URL, render указывает на страницу по которой идет данный URL */}
        <Route path="/Profile/" render={() => <ProfileContainer />} />
        <Route path="/Dialogs" render={() => <DialogsContainer />} />
        <Route path='/Music' render={() => <Music />} />
        <Route path='/Setting' render={() => <Setting />} />
        <Route path='/News' render={() => <News />} />
        <Route path="/Users" render={() => <UsersCountainer />} />
      </div>
    </div>

  );
}


export default App;
