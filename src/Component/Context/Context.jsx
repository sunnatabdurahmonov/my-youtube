import { createContext, useEffect } from "react";
import { useState } from "react";
import {Card} from '../Home/card/Card'
import axios from "axios";
import { SwiperSlide } from "swiper/react";
import Card2 from "../Home/card2/Card2";
import { Card3 } from "../Trending/card3";
import { ProfileHomeCard } from "../profil/ProfileHome/ProfileHomeCard";




export const HeaderContext = createContext()

export const HeaderContextProvider = ({children}) => {
    const [state, setState] = useState(true);
    const [data,setData] = useState('')
    const [data2,setData2] = useState('')
    const [data3,setData3] = useState('')
    const [loading,setLoading] = useState(false)
    const [profile,setProfile] = useState('')
    const [stateId,setStateId] = useState('')
    const [value,setValue] = useState('')
    // const langLocal = window.localStorage.getItem('theme')
    const [theme,setTheme] = useState( false)


    const myfunction = async () => {
        const options = {
            method: 'GET',
            url: 'https://youtube-v3-alternative.p.rapidapi.com/playlist',
            params: {
                id: 'PLMC9KNkIncKseYxDN2niH6glGRWKsLtde'
            },
            headers: {
                'X-RapidAPI-Key': '27a16d6e27msh374d55903e28f5ep1e99afjsne64f3f1d7d9e',
                'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
              }
          };
          
          try {
              let response = await axios.request(options);
            
              if(response) {
                setLoading(true)
              }
              setStateId(response.data.data)
             const cardMap = response.data.data.map((info) => (
             <SwiperSlide>
                   <Card
                cardImg={info.thumbnail[0].url}
                cardTitle={info.title}
                cardText={info.videoInfo}
                cardText2={info.videoOwnerChannelTitle}
                link2={`/videoPage/${info.videoId}`}
                />
              </SwiperSlide> 
             ))
             setData(cardMap)
          } catch (error) {
              console.error(error);
          }
        }



        const myfunction2 = async () => {
   
   
            const options = {
                method: 'GET',
                url: 'https://youtube-v3-alternative.p.rapidapi.com/playlist',
                params: {
                    id: 'PLMC9KNkIncKseYxDN2niH6glGRWKsLtde'
                
                },
                headers: {
                    'X-RapidAPI-Key': '27a16d6e27msh374d55903e28f5ep1e99afjsne64f3f1d7d9e',
                    'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
                  }
              };
              
              try {
                  const response = await axios.request(options);
                  if(response) {
                    setLoading(true)
                  }
                 const cardMap2 = response.data.data.map((info) => (
                 <SwiperSlide>
                    <Card2
                    cardImg2={info.thumbnail[0].url}
                    cardTitle2={info.title}
                    cardText3={info.videoInfo}
                    cardText4={info.videoOwnerChannelTitle}
                    link3={`/videoPage/${info.videoId}`}/>
                  </SwiperSlide> 
                 ))
                 setData2(cardMap2)
              } catch (error) {
                  console.error(error);
              }
            }

            const myfunction3 = async () => {
                const options = {
                    method: 'GET',
                    url: 'https://youtube-v3-alternative.p.rapidapi.com/playlist',
                    params: {
                        id: 'PLMC9KNkIncKseYxDN2niH6glGRWKsLtde'
                    
                    },
                    headers: {
                        'X-RapidAPI-Key': '27a16d6e27msh374d55903e28f5ep1e99afjsne64f3f1d7d9e',
                        'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
                      }
                  };
                  
                  try {
                      const response = await axios.request(options);
                      if(response) {
                        setLoading(true)
                      }
                     const cardMap3 = response.data.data.map((info) => (
                     <SwiperSlide>
                        <Card3
                        cardImg3={info.thumbnail[2].url}
                        cardTitle3={info.title}
                        cardText5={info.videoInfo}
                        cardText6={info.videoOwnerChannelTitle}
                        link4={`/videoPage/${info.videoId}`}
                        />
                      </SwiperSlide> 
                     ))
                     setData3(cardMap3)
                  } catch (error) {
                      console.error(error);
                  }
                }



        const Function = async () => {
   
   
            const options = {
                method: 'GET',
                url: 'https://youtube-v3-alternative.p.rapidapi.com/playlist',
                params: {
                    id: 'PLMC9KNkIncKseYxDN2niH6glGRWKsLtde'
                
                },
                headers: {
                    'X-RapidAPI-Key': '27a16d6e27msh374d55903e28f5ep1e99afjsne64f3f1d7d9e',
                    'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
                  }
              };
              
              try {
                  const response = await axios.request(options);
                 const cardMap4 = response.data.data.map((info) => (
                    <ProfileHomeCard
                    img={info.thumbnail[0].url}
                    title={info.title}
                    text={info.videoInfo}
                    span={info.videoOwnerChannelTitle}
                    link8={`/videoPage/${info.videoId}`}/>
                 ))
                 setProfile(cardMap4)
              } catch (error) {
                  console.error(error);
              }
            }
        
           useEffect(() => {
            myfunction()
            myfunction2()
            myfunction3()
            Function()
           },[])
           if(!loading){
            return <div className="loader loading"></div>
           }


    

    let info = {
        state,
        setState,
        data,
        setData,
        data2,
        setData2,
        data3,
        setData3,
        profile,
        setProfile,
        stateId,
        setStateId,
        theme,
        setTheme,
        myfunction,
        value,
        setValue
    }

    return(
        <HeaderContext.Provider value={info}>
            {children}
        </HeaderContext.Provider>
    )

}