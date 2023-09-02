import React, { useContext } from 'react'
import '../Home/home.scss'
import over from '../../assest/dollie.svg'
import food from '../../assest/foot.svg'
import Application2 from './swiper2/Swiper2'
import Application from './swiper/Swiper'
import Application3 from './swiper3/Swiper3'
import Sidebar from '../Sidebar/Sidebar'
import { HeaderContext } from '../Context/Context'

export const Home = () => {
  const {theme} = useContext(HeaderContext)
  return (
   <div className='home-sidebar'>
    <div className="sidebar-flex2">
      <Sidebar/>
    </div>
     <div className='container'>
     <div className="dollieBlair">
        <div className="Dolli-img-menu">
          <img className='dollie-img' src={over} alt="logo" />
          <h3 className={theme === false ? 'dolli-text' : 'dolli-text-2'}>Dollie Blair</h3>
        </div>
     <div className="card-menu-list card-menu-list2">
      <Application/>
     </div>
     <h3 className={theme === false ? 'dolli-text' : 'dolli-text-2'}>Recommended</h3>
     <div className="card-menu-list">
      <Application2/>
     </div>
     <div className="Dolli-img-menu">
          <img className='dollie-img' src={food} alt="logo" />
          <h3 className={theme === false ? 'dolli-text' : 'dolli-text-2'}>Most viewed</h3>
          <p className='card-span'>Recommended channel for you</p>
        </div>
        <div className="card-menu-list card-menu-list2">
          <Application3/>
     </div>
      </div>
    </div>
   </div>
  )
}

export default Home
