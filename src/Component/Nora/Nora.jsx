import React from 'react'
import { NavLink, Outlet,useLocation } from 'react-router-dom'
import { ProfilCard } from '../profil/ProfilCard'
import Sidebar from '../Sidebar/Sidebar'
import nora from '../../assest/nora.svg'
import noraProfil from '../../assest/photo-1606481021733-5e269f7d87f6.jpeg'

export const Nora = () => {
  const {pathname:activname} = useLocation()
  return (
    <div className='home-sidebar'>
   <div className="sidebar-flex">
    <Sidebar/>
    </div>
      <div className='container'>
        <img className='profil-img' src={noraProfil} alt="photo" />
        <div className="card-menu">
          <ProfilCard
          img={nora}
          title='Nora Francis'
          span='245K subscribed'
          />
        </div>
        <ul className='profil-link-list'>
          <li>
            <NavLink to='/nora'  className={activname === "/nora" ? 'activen2' : 'profil-link'} >Home</NavLink>
          </li>
          <li>
            <NavLink to='/nora/video2'  className={activname === "/nora/video2" ? 'activen2' : 'profil-link'}>Videos</NavLink>
          </li>
        </ul>
      <div className="table">
        <Outlet/>
      </div>
    </div>
  </div>
  )
}

export default Nora