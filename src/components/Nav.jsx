import React from 'react';
import classes from './Nav.module.css';

const Nav = () =>{
    return(
        <nav className={classes.nav}>
          <div className={classes.item}>Profile</div>
          <div className={classes.item}>Messeges</div>
          <div className={classes.item}>News</div>
          <div className={classes.item}>Music</div>
          <div className={classes.item}>Setting</div>
        </nav>
        
    );
}

export default Nav;