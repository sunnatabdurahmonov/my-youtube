import React from 'react'
import { useContext } from 'react'
import { HeaderContext } from '../../Context/Context'

export const Video4 = () => {
  const {data} = useContext(HeaderContext)
  const {state} = useContext(HeaderContext)
  return (
    <div className={state === true ? 'data-all' : 'data-all-2'}>
    {data.slice(5,80)}
  </div>
  )
}

export default Video4