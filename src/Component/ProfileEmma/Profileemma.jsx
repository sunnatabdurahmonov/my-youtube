import React from 'react'
import { NavLink, Outlet,useLocation } from 'react-router-dom'
import { ProfilCard } from '../profil/ProfilCard'
import Sidebar from '../Sidebar/Sidebar'
import emma from '../../assest/emma.svg'
import emmaProfil from '../../assest/emmaProfil.avif'

export const Profileemma = () => {
  const {pathname:activname} = useLocation()
  return (
    <div className='home-sidebar'>
   <div className="sidebar-flex">
    <Sidebar/>
    </div>
      <div className='container'>
        <img className='profil-img' src={emmaProfil} alt="photo" />
        <div className="card-menu">
          <ProfilCard
          img={emma}
          title='Emma Hanson'
          span='245K subscribed'
          />
        </div>
        <ul className='profil-link-list'>
          <li>
            <NavLink to='/emma' className={activname == "/emma" ? 'activen2' : 'profil-link'}>Home</NavLink>
          </li>
          <li>
            <NavLink to='/emma/video4' className={activname == "/emma/video4" ? 'activen2' : 'profil-link'}>Videos</NavLink>
          </li>

        </ul>
      <div className="table">
        <Outlet/>
      </div>
    </div>
  </div>
  )
}

export default Profileemma