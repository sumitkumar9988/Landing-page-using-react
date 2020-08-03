/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Menubar.css';


export default function menubar({ onClose, open }) {
    return (

        <div className="Background">
            <div id="nav" className="overlay">
                <a className="closed" open={open} onClick={onClose} >&times;</a>
                <div className="overlay-content">
                    <a href="#">About Us</a>
                    <a href="#">Login</a>
                    <a href="#">Sign Up</a>
                    <a href="#">Team</a>
                </div>
            </div>
        </div>
    );
}



