import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import '../SidebarLink/sidebarLink.scss'
import { HeaderContext } from '../../Context/Context'


export const SidebarLink = ({icons,title,link}) => {
  const {state} = useContext(HeaderContext)
  return (
  <div>
      <NavLink className={({isActive}) => `navlink ${isActive ? 'activen' : ''}`} to={link}>
        <h3 className='icons'>{icons}</h3>
        <h3 className={state === false ? 'none' : 'title'}>{title}</h3>
      </NavLink>
  </div>
  )
}

export default SidebarLink