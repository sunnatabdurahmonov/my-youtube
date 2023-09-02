import React, { useContext } from 'react'
import './header.scss'
import App from './search/Search'
import camera from '../../assest/camera.svg'
import menu1 from '../../assest/menu11.svg'
import qungiroq from '../../assest/qungiroq.svg'
import {FaUserCircle} from 'react-icons/fa'
import youtube from '../../assest/you tube icon.svg'
import { HeaderContext } from '../Context/Context'
import {GiHamburgerMenu} from 'react-icons/gi'
import { MdDarkMode } from 'react-icons/md'
import { NavLink } from 'react-router-dom'


export const Header = () => {
  const {state,setState} = useContext(HeaderContext)
  const {theme,setTheme} = useContext(HeaderContext)

  const darknot = () => {
    setTheme(!theme)
  }
  return (
     <div className={`header ${theme === false ? 'header__light' : 'header__dark'}`}>
          <div className="sidebar-menu-img">
            <GiHamburgerMenu className={theme === false ? 'icon-menu' : 'icon-menu2'}  onClick={() => setState(!state)}/>
        <NavLink to='/' className={theme === false ? 'youtube' : 'youtube2'} >
          <img src={youtube} alt="logo" />
          <h1 className='youtube-title'>YouTube</h1>
        </NavLink>
      </div>
    <div className="search-list">
    <App/>
    </div>
       <ul className='header-list'>
        <li>
          <MdDarkMode className='dark' onClick={darknot}/>
        </li>
        <li>
            <FaUserCircle className='user'/>
        </li>
       </ul>
    </div>
  )
}

export default Header