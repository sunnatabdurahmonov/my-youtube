import React, { useContext } from 'react'
import '../ProfilCard/profilcard.scss'
import { HeaderContext } from '../../Context/Context'

export const ProfilCard = ({img,title,span}) => {
  const {theme} = useContext(HeaderContext)
  return (
    <div className='profil-card-menu'>
       <div className="profil-card-img">
       <img src={img} alt={title} />
       </div>
       <div className="profil-card-list">
        <h4 className={theme === false ? 'dolli-text' : 'dolli-text-2'}>{title}</h4>
        <p className='card-span'>{span}</p>
       </div>

    </div>
  )
}

export default ProfilCard