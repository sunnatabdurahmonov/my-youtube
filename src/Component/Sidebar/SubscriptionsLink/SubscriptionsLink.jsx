import React, { useContext } from 'react'
import '../SubscriptionsLink/SubscriptionsLink.scss'
import { NavLink } from 'react-router-dom'
import { HeaderContext } from '../../Context/Context'

export const SubscriptionsLink = ({img2,title2,link7}) => {
  const {state} = useContext(HeaderContext)

 
  return (
   <div className='Subscriptions-menu'>
     <NavLink className={({isActive}) => `navlink ${isActive ? 'activen' : ''}`} to={link7}>
        <img className='navlink2-img' src={img2} alt={title2} />
        <h3 className={state == false ? 'none' : 'title'}>{title2}</h3>
    </NavLink>
   </div>
  )
}

export default SubscriptionsLink