import React, { useContext } from 'react'
import '../Layout/layout.scss'
import { HeaderContext } from '../Context/Context'
import { Header } from '../header'


export const Layout = ({children}) => {
  const {state} = useContext(HeaderContext)
  const {theme} = useContext(HeaderContext)
  return (
    <div className={`layout-menu ${theme === false ? 'header__light' : 'header__dark'}`}>
   <div className="header">
   <Header/>
   </div>
      <div className={state === true ? 'children' : 'children-2'}>
        {children}
      </div>
    </div>
  )
}

export default Layout
