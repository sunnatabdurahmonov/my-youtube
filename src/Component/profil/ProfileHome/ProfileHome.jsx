
import React, { useContext, useEffect, useState } from 'react'
import { HeaderContext } from '../../Context/Context';
import '../ProfileHome/profilehome.scss'
import Application from '../../Home/swiper/Swiper';
export const ProfileHome = () => {
    const {profile} = useContext(HeaderContext)
    const {theme} = useContext(HeaderContext)
  return (
    <div>
        {profile.slice(13,14)}
        <div className="margaret">
            <h3 className={theme === false ? 'card-text2' : 'card-dark2'}>Gussie videos</h3>
        <div className="margaret-list">
        <Application/>
        </div>
        </div>
    </div>
  )
}

export default ProfileHome