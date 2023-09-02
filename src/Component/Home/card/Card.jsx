import React, { useContext } from 'react'
import '../card/card.scss'
import { Link } from 'react-router-dom'
import { HeaderContext } from '../../Context/Context'


 export const Card = ({cardImg,cardTitle,cardText,cardText2,link2}) => {
  const {theme} = useContext(HeaderContext)
  return (
    <Link className='card-list' to={link2}>
        <img className='card-img' src={cardImg} alt="logo" />
        <h4 className={theme === false ? 'card-text' : 'card-dark'}>{cardTitle}</h4>
        <div className="span">
            <p className='card-span'>{cardText}</p>
            <p className='card-span'>{cardText2}</p>
        </div>
    </Link>
  )
}

export default Card