import React from 'react';
//ch == classHeader. Подключение к модулю css
import ch from'./Header.module.css';

const Header = () =>{
    return(
        <header className={ch.header}>
        <img src ="https://mobile-review.com/articles/2019/image/echo-43/scr/10.jpg"></img>
        </header>
    );
}

export default Header;