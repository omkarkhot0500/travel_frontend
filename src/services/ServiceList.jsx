import React from 'react'
import ServiceCard from './ServiceCard'
import {Col} from 'reactstrap'
import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'
const serviceData=[
    {
        imgUrl :weatherImg,
        title :"Plan your travels",
        desc : "Start your adventure with seamless planning. Enjoy stress-free trips and unforgettable experiences."
      },
      {
        imgUrl :guideImg,
        title :"Best Tour to Guide",
        desc : "Discover the most trusted tour guides for an enriched journey filled with insights and local flair."
      },
      {
        imgUrl :customizationImg,
        title :"Customization",
        desc : "Tailor your travel itinerary to match your unique preferences and create perfect moments."
      },
]
export const ServiceList = () => {
  return(
  <>
    {
        serviceData.map((item,index)=>{
            return(<Col lg='3' md = '6' sm='12' className='mb-4' key={index}><ServiceCard item={item}/></Col>)
        })
    }
  </>
        )
}
