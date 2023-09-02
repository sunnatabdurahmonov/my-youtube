import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../VideoPage/videoPage.scss'
import { HeaderContext } from '../Context/Context'
import axios from 'axios';
import { CardComment } from './CardComment';
import Sidebar from '../Sidebar/Sidebar';
import {BiSolidDownArrow} from 'react-icons/bi'


export const VideoPage = () => {
  const [comment,setComment] = useState('')
  const {stateId} = useContext(HeaderContext)
  const {id} = useParams()
    const mapId = stateId.find(user => user.videoId ==id)




  useEffect(() => {
    const videoFunction = async () => {

      const options = {
        method: 'GET',
        url: 'https://youtube-v31.p.rapidapi.com/commentThreads',
        params: {
          part: 'snippet',
          videoId: '7ghhRHRP6t4',
          maxResults: '100'
        },
        headers: {
          'X-RapidAPI-Key': '27a16d6e27msh374d55903e28f5ep1e99afjsne64f3f1d7d9e',
          'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
        }
      };
      
      try {
        const response = await axios.request(options);
        const commnetMap = response.data.items.map((comment) => (
          <CardComment
          commentImg={comment.snippet.topLevelComment.snippet.authorProfileImageUrl}
          commentTitle={comment.snippet.topLevelComment.snippet.authorDisplayName}
          commentDate={comment.snippet.topLevelComment.snippet.publishedAt}
          comment={comment.snippet.topLevelComment.snippet.textDisplay}
          />
        ))
        setComment(commnetMap)
      } catch (error) {
        console.error(error);
      }
    
     }
     videoFunction()
  },[])


  const {data} = useContext(HeaderContext)

  return (
    <div className="home-sidebar">
      <div className="sidebar-flex">
        <Sidebar/>
      </div>
      <div className="container">
       <div className="iframe-menu">
      <div className="iframe-list">
    <iframe className='iframe'  src={`https://www.youtube.com/embed/${id}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    <h3 className='video-title'>{mapId.title}</h3>
    </div>
   <div className="data-menu-list">
    
  <div className="comment">
  {comment}
  </div>
  <div className="firkla">
   <div className="fikrlar-text">
   <h4>Comments</h4>
    <span className='card-span'>100</span>
   </div>
 <div className="fikrlar-menu">
 {comment.slice(0,1)}
    <BiSolidDownArrow/>
 </div>
    
  </div>
   <div className="data-menu">
   {data.slice(10.70)}
   </div>
   </div>
      </div>
   </div>
    </div>
  )
}

export default VideoPage