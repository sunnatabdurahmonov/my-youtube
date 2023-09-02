import React, { useContext } from 'react'
import { HeaderContext } from '../../Context/Context'

export const Video2 = () => {
  const {state} = useContext(HeaderContext)
  const {data} = useContext(HeaderContext)
  return (
    <div className={state === true ? 'data-all' : 'data-all-2'}>
    {data}
  </div>
  )
}

export default Video2