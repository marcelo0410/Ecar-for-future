import React,{useState, useEffect} from 'react'
import QuestionSevenCharging from './QuestionSevenCharging'
import QuestionFourCar from './QuestionFourCar'
import QuestionOneEVModel from './QuestionOneEVModel'
import QuestionStart from './QuestionStart'
import QuestionThreeTraveler from './QuestionThreeTraveler'
import QuestionTwoJourney from './QuestionTwoJourney'
import QuestionFiveFuel from './QuestionFiveFuel'
import QuestionSixFuel from './QuestionSixFuel'

export default function CalculatorCanvas() {
  const [controlCom, setcontrolCom] = useState("1")

  useEffect(() => {
    // setcontrolCom("1")
  
    return () => {
      
    }
  }, [])
  
  // QuestionStart
  const changeControl = (newControl) =>{
    setcontrolCom(newControl)
  }

  return (
    <div>
      <QuestionStart/>
    </div>

  )
}
