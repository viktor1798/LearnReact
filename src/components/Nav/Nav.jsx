import React from 'react';
//cn == classNav. Подключение к модулю css
import cn from './Nav.module.css';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className={cn.nav}>
      <div className={cn.item}>
        <NavLink to="/profile" activeClassName={cn.active}>  Profile </NavLink>
      </div>
      <div className={cn.item}>
        <NavLink to="/dialogs" activeClassName={cn.active}>  Messeges </NavLink>
      </div>
      <div className={cn.item}>
        <NavLink to='/news' activeClassName={cn.active}>News</NavLink>
      </div>
      <div className={cn.item}>
        <NavLink to='/music' activeClassName={cn.active}>Music</NavLink>
      </div>
      <div className={cn.item}>
        <NavLink to='/setting' activeClassName={cn.active}> Setting </NavLink>
      </div>
      <div className={cn.item}>
        <NavLink to='/users' activeClassName={cn.active}> Users </NavLink>
      </div>
    </nav>

  );
}

export default Nav;