import React, { useContext } from 'react'
import profil from '../../assest/profil.png'
import Sidebar from '../Sidebar/Sidebar'
import '../profil/profil.scss'
import { ProfilCard } from './ProfilCard'
import { NavLink, Outlet ,useLocation } from 'react-router-dom'
import gussi from '../../assest/gussia.svg'



export const Profil = () => {

  const {pathname:activname} = useLocation()

  return (
  <div className='home-sidebar'>
    <div className="sidebar-flex">
    <Sidebar/>
    </div>
      <div className='container' >
        <img className='profil-img' src={profil} alt="photo" />
        <div className="card-menu">
          <ProfilCard
          img={gussi}
          title='Gussie Singleton'
          span='245K subscribed'
          />
        </div>
        <ul className='profil-link-list'>
          <li>
            <NavLink to='/profile' className={activname == "/profile" ? 'activen2' : 'profil-link'}>Home</NavLink>
          </li>
          <li>
            <NavLink to='/profile/video' className={activname == "/profile/video" ? 'activen2' : 'profil-link'}>Videos</NavLink>
          </li>
        </ul>
      <div className="table">
        <Outlet/>
      </div>
    </div>
  </div>
  )
}

export default Profil