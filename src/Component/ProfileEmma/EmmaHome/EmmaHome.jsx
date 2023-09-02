import React, { useContext } from 'react'
import { HeaderContext } from '../../Context/Context'
import Application from '../../Home/swiper/Swiper'


export const EmmaHome = () => {
    const {profile} = useContext(HeaderContext)
    const {theme} = useContext(HeaderContext)
  return (
    <div>
    {profile.slice(77,78)}
    <div className="margaret">
        <h3 className={theme === false ? 'card-text2' : 'card-dark2'}>Gussie videos</h3>
    <div className="margaret-list">
    <Application/>
    </div>
    </div>
</div>
  )
}

export default EmmaHome