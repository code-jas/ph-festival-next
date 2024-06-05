'use client';
import React from 'react'
import  {FestivalDetailsType} from '@/app/typings/festival-detail-type';
import { FaMapPin } from 'react-icons/fa6';
import '@/assets/styles/view-festival-details.css';
interface FestivalDetailsClientProps {
    festival: FestivalDetailsType
}

const FestivalDetailsClient:React.FC<FestivalDetailsClientProps> = ({festival}) => {
  return (
    <div className="fest-container">
        {JSON.stringify(festival, null, 3)}
            <h5 className="fest-island-group">{festival.islandGroup}</h5>
            <h1 className="fest-header">{festival.title}</h1>
            <h5 className="fest-date">{festival.date}</h5>
            <h5 className="fest-loc"><FaMapPin/>{festival.location}</h5>
            <div className="fest-parag-cont">
               <p className="fest-parag">{festival.paragraph1}</p>
               <br/>
               <p className="fest-parag">{festival.paragraph2}</p>
               <div className="image">
               {/* <img src=\"$db_img\" alt=\"$db_title\"> */}
               </div>
             
               <p className="fest-parag">{festival.paragraph3}</p>
               <br/>
               <p className="fest-parag">{festival.paragraph4}</p>
               <h3>{festival.title} Activities</h3>


               {/* <div className="container">
                  <div className="box">
                     <img src=\"$db_imgItem1\" />
                  
                  </div>
                  <div className="box">
                     <img src=\"$db_imgItem2\" />
                  
                  </div>
                  <div className="box">
                     <img src=\"$db_imgItem3\" />
                  
                  </div>
                  <div className="box">
                     <img src=\"$db_imgItem4\" />
                  </div>
               </div> */}

               {/* <div className="video-wrapper">
                  <iframe width=\"560\" height=\"315\" src=\"$db_ytPath\"
                     title=\"YouTube video player\" frameborder=\"0\"
                     allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\"
                     allowfullscreen></iframe>
               </div> */}
              
               <a  className="content-fest-link-source" href={festival.ref}>reference</a>
              
            
            </div>



         </div>
  )
}

export default FestivalDetailsClient