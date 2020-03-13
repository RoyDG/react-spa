import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './Person.css';

const Person = (props) => {
    const {img, name,phone,email,income} = props.profile;
    return (
        <div className='profile'>
            <div className= 'profile-image'>
                <img src={img} alt="profileImage"/>
            </div>

            <div>
                <h4 className= 'profile-name'>{name}</h4>
                <br/>
                <p><small>Email:{email}</small></p>
                <br/>
                <p><small>Phone:{phone}</small></p>

                <p>Income:{income}</p>
                
                
                <button className='main-button'
                        onClick = {() => props.handleAddProfile (props.profile)}>
                        <FontAwesomeIcon icon={faUser} /> 
                <span>Follow</span></button>

                <button className='main-button'
                    onClick={() => props.handleMinusProfile(props.profile)}>
                    <FontAwesomeIcon icon={faUser} />
                    <span>UnFollow</span></button>
            </div>
        </div>
    );
};

export default Person;