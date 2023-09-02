import React, { useContext } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { HeaderContext } from '../Context/Context'

export const Library = () => {
    const {data} = useContext(HeaderContext)
    const {state} = useContext(HeaderContext)
    return (
      <div className='home-sidebar'>
          <div className="sidebar-flex2">
              <Sidebar/>
          </div>
            <div className='container'>
              <div className={state === true ? 'data-all' : 'data-all-2'}>
              {data}
              </div>
      </div>
      </div>
    )
}

export default Library