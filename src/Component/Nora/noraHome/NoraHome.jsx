import React, { useContext } from 'react'
import Application from '../../Home/swiper/Swiper'
import { HeaderContext } from '../../Context/Context'

export const NoraHome = () => {
    const {profile} = useContext(HeaderContext)
    const {theme} = useContext(HeaderContext)
  return (
    <div>
    {profile.slice(59,60)}
    <div className="margaret">
        <h3 className={theme === false ? 'card-text2' : 'card-dark2'}>Margaret Phelps videos</h3>
    <div className="margaret-list">
    <Application/>
    </div>
    </div>
</div>
  )
}

export default NoraHome