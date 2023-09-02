import React, { useContext } from 'react'
import { HeaderContext } from '../Context/Context'
import Sidebar from '../Sidebar/Sidebar'
import '../history/history.scss'

export const History = () => {
    const {profile} = useContext(HeaderContext)
  return (
    <div className="home-sidebar">
          <div className="sidebar-flex">
    <Sidebar/>
    </div>
    <div className='container'>
        <div className="history">
        {profile}
        </div>
    </div>

    </div>
  )
}

export default History