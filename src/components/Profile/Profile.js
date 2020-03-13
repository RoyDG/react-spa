import React, { useState } from 'react';
import Data from '../../data';
import './Profile.css';
import Person from '../Person/Person';
import Cart from '../Cart/Cart';

const Profile = () => {
    
    const first15 = Data.slice(0,15);
    const [profiles] = useState(first15);
    const [cart, setCart] = useState([]);

    const handleAddProfile = (profile) =>{
    const newCart = [...cart, profile];
    setCart (newCart);
    }
        const handleMinusProfile = (profile) => {
            const newCart = [...cart, profile];
            setCart(newCart);
    }
    return (
        <div className= 'full-container'>
            <div className="profile-container">
            {
            profiles.map(pd => <Person 
                handleAddProfile = {handleAddProfile}
                handleMinusProfile={handleMinusProfile}
                profile = {pd}>
                </Person>)
            }
            </div>
            <div className="cart-container">
                    
                    <Cart cart = {cart}></Cart>
            </div>
           
        </div>
    );
};

export default Profile;