import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className= 'Header'>
           <img src = {logo} alt = 'logo'/>
           <nav>
               <a href="/home">Home</a>
               <a href="/profile">Profile</a>
               <a href="/notification">Notification</a>
               <a href="massage">Massage</a>
               <input type="text" placeholder="search"/>
                <button className='search-btn'> Search </button>
           </nav>
        </div>
    );
};

export default Header;