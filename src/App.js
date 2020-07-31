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


const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <div className="app-wrapper-content">
          <Route path="/Profile" component={Profile} />
          <Route path="/Dialogs" component={Dialogs} />
          <Route path='/Music' component={Music}/>
          <Route path='/Setting' component={Setting}/>
          <Route path='/News' component={News}/>
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;
