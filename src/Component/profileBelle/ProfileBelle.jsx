import React from 'react'
import { NavLink, Outlet,useLocation } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'
import { ProfilCard } from '../profil/ProfilCard'
import belle from '../../assest/belle.svg'
import profileBelle from '../../assest/profileBelle.avif'
 
export const ProfileBelle = () => {
  const {pathname:activname} = useLocation()
  return (
    <div className='home-sidebar'>
    <div className="sidebar-flex">
    <Sidebar/>
    </div>
      <div className='container'>
        <img className='profil-img' src={profileBelle} alt="photo" />
        <div className="card-menu">
          <ProfilCard
          img={belle}
          title='Belle Briggs'
          span='242K subscribed'
          />
        </div>
        <ul className='profil-link-list'>
          <li>
            <NavLink to='/belle' className={activname == "/belle" ? 'activen2' : 'profil-link'}>Home</NavLink>
          </li>
          <li>
            <NavLink to='/belle/video3'  className={activname == "/belle/video3" ? 'activen2' : 'profil-link'}>Videos</NavLink>
          </li>
        </ul>
      <div className="table">
        <Outlet/>
      </div>
    </div>
  </div>
  )
}

export default ProfileBelle