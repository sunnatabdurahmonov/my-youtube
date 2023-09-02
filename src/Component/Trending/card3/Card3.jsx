import React, { useContext } from 'react'
import '../card3/card3.scss'
import { Link } from 'react-router-dom'
import { HeaderContext } from '../../Context/Context'

export const Card3 = ({cardImg3, cardTitle3, cardText5, cardText6,link4}) => {
  const {theme} = useContext(HeaderContext)
  return (
    <Link className='card-list2' to={link4}>
    <img className='card-img3' src={cardImg3} alt="logo" />
    <h4 className={theme === false ? 'card-text' : 'card-dark'}>{cardTitle3}</h4>
    <div className="span">
        <p className='card-span'>{cardText5}</p>
        <p className='card-span'>{cardText6}</p>
    </div>
</Link>
  )
}

export default Card3