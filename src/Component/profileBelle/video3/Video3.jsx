import React, { useContext } from 'react'
import { HeaderContext } from '../../Context/Context'

export const Video3 = () => {
  const {data} = useContext(HeaderContext)
  const {state} = useContext(HeaderContext)
  return (
    <div className={state === true ? 'data-all' : 'data-all-2'}>
    {data.slice(15,80)}
  </div>
  )
}

export default Video3