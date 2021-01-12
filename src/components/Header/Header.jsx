import React from 'react';
import { NavLink } from 'react-router-dom';
//ch == classHeader. Подключение к модулю css
import ch from'./Header.module.css';

const Header = (props) =>{
    return(
        <header className={ch.header}>
        <img src ="https://mobile-review.com/articles/2019/image/echo-43/scr/10.jpg"></img>
        <div className={ch.loginBlock}>
            {props.isAuth
            ?<div> {props.login} | <button onClick={props.logout}>Log Out</button> </div>
            :<NavLink to={'/login'}> Login </NavLink>}
        </div>
        </header>
    );
}

export default Header;