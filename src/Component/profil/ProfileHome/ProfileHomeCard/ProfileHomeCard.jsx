import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import '../ProfileHomeCard/profilehomecard.scss'
import { HeaderContext } from '../../../Context/Context'

export const ProfileHomeCard = ({img,title,text,span,link8}) => {
  const {theme} = useContext(HeaderContext)
  return (
    <Link to={link8} className='profile-home-card'>
        <div className="profile-home-card-img">
            <img src={img} alt={title} />
        </div>
        <div className="profile-home-card-text">
            <h3 className={theme === false ? 'card-text2' : 'card-dark2'}>{title}</h3>
            <p className='card-span'>{text}</p>
            <p className='span-menu'>{span}</p>
        </div>
    </Link>
  )
}

export default ProfileHomeCard