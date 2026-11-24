import React from 'react'
import './Header.css';
import Netflixlogo from '../../Assets/Images/Netflixlogo.jpg'; // adjust path/extension to match your file
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const Header = () => {
  return (
    <div className='header_outer_container'>
        <div className='header_container'>
            <div className='header_left'>
                <ul>
                    <li> <img src={Netflixlogo} alt="Netflixlogo" width="100"/> </li>
                    <li>Netflix</li>
                    <li>Home</li>
                    <li>TvShows</li>
                    <li>Movies</li>
                    <li>Latest</li>
                    <li>MyList</li>
                    <li>Browse by Languages</li>
                </ul>
            </div>
            <div className='header_right'>
                <ul>
                    <li><SearchIcon/></li>
                    <li><NotificationsNoneIcon/></li>
                    <li><ArrowDropDownIcon/></li>
                   
                </ul>
            </div>
        </div>
   
    </div>
  )
}

export default Header
