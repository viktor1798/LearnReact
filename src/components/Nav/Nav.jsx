import React from 'react';
//cn == classNav. Подключение к модулю css
import cn from './Nav.module.css';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className={cn.nav}>
      <div className={cn.item}>
        <NavLink to="/Profile" activeClassName={cn.active}>  Profile </NavLink>
      </div>
      <div className={cn.item}>
        <NavLink to="/Dialogs" activeClassName={cn.active}>  Messeges </NavLink>
      </div>
      <div className={cn.item}>
        <NavLink to='/News' activeClassName={cn.active}>News</NavLink>
      </div>
      <div className={cn.item}>
        <NavLink to='/Music' activeClassName={cn.active}>Music</NavLink>
      </div>
      <div className={cn.item}>
        <NavLink to='/Setting' activeClassName={cn.active}> Setting </NavLink>
      </div>
      <div className={cn.item}>
        <NavLink to='/Users' activeClassName={cn.active}> Users </NavLink>
      </div>
    </nav>

  );
}

export default Nav;