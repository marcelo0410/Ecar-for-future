import React from 'react'
import newsHouse from '../../../assets/currentenv/news-house.jpg'
import newsCars from '../../../assets/currentenv/news-cars.jpg'
import newsBikes from '../../../assets/currentenv/news-bike.jpg'
export default function News() {
  return (
    <div className="container">
        <div className='left-middle'>News</div>
        <div className='mt-4'>
            <img src={newsHouse} style={{height:"300px",width:"180px", marginRight:"30px"}}></img>
            <img src={newsCars} style={{height:"300px",width:"180px", marginRight:"30px"}}></img>
            <img src={newsBikes} style={{height:"300px",width:"180px", marginRight:"30px"}}></img>
        </div>
    </div>
  )
}
