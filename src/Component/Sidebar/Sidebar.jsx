import React, { useContext } from 'react'
import '../Sidebar/sidebar.scss'
import { SidebarLink } from './SidebarLink'
import {AiOutlineFire, AiOutlineFolder, AiOutlineHeart, AiOutlineHome, AiOutlineStar} from 'react-icons/ai'
import {MdOutlineSubscriptions} from 'react-icons/md'
import {RiFilePaper2Line} from 'react-icons/ri'
import {RxStopwatch} from 'react-icons/rx'
import {IoLogoGameControllerB} from 'react-icons/io'
import {BsMusicNoteBeamed} from 'react-icons/bs'
import {FiSettings} from 'react-icons/fi'
import BasicAccordion from './Accordion/Accordion'
import { SubscriptionsLink } from './SubscriptionsLink'
import over from '../../assest/Oval.png'
import over2 from '../../assest/Oval2.png'
import over3 from '../../assest/Oval3.png'
import over4 from '../../assest/Oval4.png'
import over5 from '../../assest/Oval5.png'
import over7 from '../../assest/Oval7.png'
import { HeaderContext } from '../Context/Context'




export const Sidebar = () => {
  const {state} = useContext(HeaderContext)
  const {theme} = useContext(HeaderContext)

  return (
    <div className={`sidebar ${theme === false ? 'header__light' : 'header__dark'}`}>
      <ul className='sidebar-list'>
        <SidebarLink 
        icons={<AiOutlineHome id='icons'/>}
        title='Home'
        link='/'
        />
        <SidebarLink 
        icons={<AiOutlineFire id='icons'/>}
        title='Trending'
        link='/trending'
        />
            <SidebarLink 
        icons={<MdOutlineSubscriptions id='icons'/>}
        title='Subscriptions'
        link='/subscriptions'
        />
      <li className='list-2'>
        <ul className={state === false ? 'none' : 'list-menu-2'}>
        <SidebarLink 
        icons={<AiOutlineFolder id='icons'/>}
        title='Library'
        link='/library'
        />
            <SidebarLink 
        icons={<RiFilePaper2Line id='icons'/>}
        title='History'
        link='/history'
        />
            <SidebarLink 
        icons={<RxStopwatch id='icons'/>}
        title='Watch later'
        link='/watch'
        />
            <SidebarLink 
        icons={<AiOutlineStar id='icons'/>}
        title='Favourites'
        link='/favourites'
        />
            <SidebarLink 
        icons={<AiOutlineHeart id='icons'/>}
        title='Liked videos'
        link='/liked'
        />
              <SidebarLink 
        icons={<BsMusicNoteBeamed id='icons'/>}
        title='Music'
        link='/music'
        />
            <SidebarLink 
        icons={<IoLogoGameControllerB id='icons'/>}
        title='Games'
        link='/games'
        />
        {/* <BasicAccordion /> */}
        </ul>
      </li>
      </ul>
      <h3 className={state === false ? 'none' : 'Subscriptions'}>Subscriptions</h3>

      <ul className='sidebar-list-menu-3'>
      <SubscriptionsLink
      img2={over}
      title2='Gussie Singleton'
      link7='/profile'

      />
        <SubscriptionsLink
      img2={over2}
      title2='Nora Francis'
      link7='/nora'
      />
        <SubscriptionsLink
      img2={over3}
      title2='Belle Briggs'
      link7='/belle'
      />
        <SubscriptionsLink
      img2={over5}
      title2='Emma Hanson'
      link7='/emma'
      />
      </ul>
    <div className={state === true ? 'state2' : 'setting-list'}>
    <SidebarLink 
        icons={<FiSettings id='icons'/>}
        title='Settings'
        link='/setting'
        />
    </div>
    </div>
  )
}

export default Sidebar
