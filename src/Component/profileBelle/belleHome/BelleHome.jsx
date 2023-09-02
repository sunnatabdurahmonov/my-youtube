import React, { useContext } from 'react'
import { HeaderContext } from '../../Context/Context'
import Application from '../../Home/swiper/Swiper'

export const BelleHome = () => {
    const {profile} = useContext(HeaderContext)
    const {theme} = useContext(HeaderContext)
  return (
    <div>
    {profile.slice(18,19)}
    <div className="margaret">
        <h3 className={theme === false ? 'card-text2' : 'card-dark2'}>Belle videos</h3>
    <div className="margaret-list">
    <Application/>
    </div>
    </div>
</div>
  )
}

export default BelleHome