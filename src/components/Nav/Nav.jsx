import React from 'react';
//cn == classNav. Подключение к модулю css
import cn from './Nav.module.css';

const Nav = () =>{
    return(
        <nav className={cn.nav}>
          <div className={cn.item}>Profile</div>
          <div className={cn.item}>Messeges</div>
          <div className={cn.item}>News</div>
          <div className={cn.item}>Music</div>
          <div className={cn.item}>Setting</div>
        </nav>
        
    );
}

export default Nav;