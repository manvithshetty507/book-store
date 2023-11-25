import React, { useState } from 'react';
import '../styles/Navbar.css';
import logo from '../images/Standard Collection 11.png';
import SearchIcon from '@mui/icons-material/Search';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DiamondIcon from '@mui/icons-material/Diamond';
import { Avatar } from '@material-ui/core';

function Navbar({searchQuery,setSearchQuery,search,setSearch}) {
  
  function handleSearch() {
     setSearch(true);
   }

  return (
    <div className='navbar'>
      <div className='navbar__logo'>
        <img src={logo} alt='logo' />
        <p className='logo__title'>
          Keazon<span>Books</span>
        </p>
      </div>

      <div className='navbar__search'>
        <div className='search__input'>
          <SearchIcon className='search__icon' />
          <input
            type='text'
            placeholder='Search the books you want and read now ....'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className='search__button'>
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>

      <div className='navbar__menu'>
        <CollectionsBookmarkIcon className='icon' />
        <NotificationsIcon className='icon' />
        <DiamondIcon className='icon' />
        <Avatar className='icon' src='' />
      </div>
    </div>
  );
}

export default Navbar;

