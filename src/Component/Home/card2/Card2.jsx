import React, { useContext } from 'react'
import '../card2/card2.scss'
import { Link } from 'react-router-dom'
import { HeaderContext } from '../../Context/Context'

export const Card2 = ({cardImg2,cardTitle2,cardText3,cardText4,link3}) => {
  const {theme} = useContext(HeaderContext)
  return (
    <Link className='card-list2' to={link3}>
    <img className='card-img2' src={cardImg2} alt="logo" />
    <h4 className={theme === false ? 'card-text' : 'card-dark'}>{cardTitle2}</h4>
    <div className="span">
        <p className='card-span'>{cardText3}</p>
        <p className='card-span'>{cardText4}</p>
    </div>
    </Link>
  )
}

export default Card2