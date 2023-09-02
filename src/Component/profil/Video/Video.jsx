import React, { useContext } from 'react'
import { HeaderContext } from '../../Context/Context'

export const Video = () => {
  const {data} = useContext(HeaderContext)
  const {state} = useContext(HeaderContext)
  return (
    <div className={state === true ? 'data-all' : 'data-all-2'}>
      {data.slice(5,70)}
    </div>
  )
}

export default Video