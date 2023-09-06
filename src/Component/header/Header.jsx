import React, { useContext } from 'react'
import './header.scss'
import App from './search/Search'
import youtube from '../../assest/you tube icon.svg'
import { HeaderContext } from '../Context/Context'
import {GiHamburgerMenu} from 'react-icons/gi'
import { MdDarkMode } from 'react-icons/md'
import {Link} from 'react-router-dom'
import { auth } from '../../config/firebase'


export const Header = () => {
  const {user} = useContext(HeaderContext)
  const {state,setState} = useContext(HeaderContext)
  const {theme,setTheme} = useContext(HeaderContext)

  const handleSignOut = async () => {
    await auth.signOut()
  }

  const darknot = () => {
    setTheme(!theme)
  }
  return (
     <div className={`header ${theme === false ? 'header__light' : 'header__dark'}`}>
          <div className="sidebar-menu-img">
            <GiHamburgerMenu className={theme === false ? 'icon-menu' : 'icon-menu2'}  onClick={() => setState(!state)}/>
        <h3 className={theme === false ? 'youtube' : 'youtube2'} >
          <img src={youtube} alt="logo" />
          <h1 className='youtube-title'>YouTube</h1>
        </h3>
      </div>
    <div className="search-list">
    <App/>
    </div>
       <ul className='header-list'>
        <li>
          <MdDarkMode className='dark' onClick={darknot}/>
        </li>
        <li>
           {user ? <p className='logout' onClick={handleSignOut}>Log Out</p> 
          : <Link className='login-link' to='/login'>Login</Link> 
          }
        </li>
       </ul>
    </div>
  )
}

export default Header