import React, { useEffect } from 'react'
import MiddleBanner from './components/MiddleBanner'
import TopBanner from './components/TopBanner'
// import Storyboard from '../storyboard/index'
// import BannerMiddle from './components/BannerMiddle'
// import BannerTop from './components/BannerTop'

export default function Index() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  
    return () => {
      
    }
  }, [])
  
  return (
    <div style={{paddingTop:"50px"}}>
        <TopBanner/>
        {/* <MiddleBanner/> */}
        {/* <Storyboard/> */}
    </div>
  )
}