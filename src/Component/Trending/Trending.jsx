import React from 'react'
import '../Trending/trending.scss'
import { Swiper4 } from './swiper4'
import Sidebar from '../Sidebar/Sidebar'

 export const Trending = () => {
  return (
   <div className='sidebar-trending'>
    <div className="sidebar-flex">
      <Sidebar/>
    </div>
     <div className='treding'>
      <Swiper4/>
    </div>
   </div>
  )
}

export default Trending