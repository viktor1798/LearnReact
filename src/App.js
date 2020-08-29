//выравнивание кода ctrl+k+f
import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, BrowserRouter } from 'react-router-dom';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';
import News from './components/News/News';
import DialogsContainer from './components/Dialogs/DialogsContainer';



const App = (props) => {
  debugger;
  return (
    //Компонента BR которая позволяет делать мнгноввеный перехо, также эта страница главная, и предназначена для 
    // компонент других страниц
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <div className="app-wrapper-content">
          {/* path- делает нужный URL, render указывает на страницу по которой идет данный URL */}
          <Route path="/Profile" render={() => <Profile />} />
          <Route path="/Dialogs" render={() => <DialogsContainer />} />
          <Route path='/Music' render={() => <Music />} />
          <Route path='/Setting' render={() => <Setting />} />
          <Route path='/News' render={() => <News />} />
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;
