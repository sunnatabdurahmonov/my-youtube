import React from 'react'
import '../CardComment/cardComment.scss'

export const CardComment = ({commentImg,commentTitle,commentDate,comment}) => {
  return (
    <div className='comment-menu'>
       <div className="commentImg">
       <img src={commentImg} alt="logo" />
       </div>
       <div className="commentText">
        <h3 className='comment-title'>{commentTitle}</h3>
        <p className='card-span'>{commentDate}</p>
        <p className='comment-text'>{comment}</p>
       </div>
    </div>
  )
}

export default CardComment