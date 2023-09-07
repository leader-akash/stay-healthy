import React, { useState } from 'react';
import './Header.css';
import logo from '../../assets/logo.avif'
import { useVideo } from '../../context/video-context';

const Header = () => {

  const {searchedText, handleSearch} = useVideo();

  return (
    <div className='navbar-container'>
        <div>
            <img className='logo' src={logo}  alt='logo'/>
        </div>
        <div>
            <input className='search-item' type='search' placeholder='search' value={searchedText} onChange={handleSearch}/>
        </div>
        <div>
        <img className='profile-img' src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png'  alt='logo'/>
        </div>
    </div>
  )
}

export default Header