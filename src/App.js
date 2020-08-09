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



const App = (props) => {
 
  return (
    
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <div className="app-wrapper-content">
          <Route path="/Profile" render = {()=> <Profile postDate={props.postDate}/>} />
          <Route path="/Dialogs" render = {()=> <Dialogs dialogDate={props.dialogDate} massegeDate={props.massegeDate} />}/>
          <Route path='/Music' render = {()=> <Music/>}/>
          <Route path='/Setting' render = {()=> <Setting/>}/>
          <Route path='/News' render = {()=> <News/>}/>
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;
