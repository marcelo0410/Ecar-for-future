import React,{useEffect} from 'react'
import Banner from './components/Banner'
import Questionaire from './components/Questionaire'

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
    <div>
        <Banner/>
        <Questionaire/>
    </div>
  )
}
