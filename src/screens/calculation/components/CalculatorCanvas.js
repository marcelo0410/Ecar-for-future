import React,{useState} from 'react'
import QuestionSevenCharging from './QuestionSevenCharging'
import QuestionFourCar from './QuestionFourCar'
import QuestionOneEVModel from './QuestionOneEVModel'
import QuestionStart from './QuestionStart'
import QuestionThreeTraveler from './QuestionThreeTraveler'
import QuestionTwoJourney from './QuestionTwoJourney'
import QuestionFiveFuel from './QuestionFiveFuel'
import QuestionSixFuel from './QuestionSixFuel'

export default function CalculatorCanvas() {
  const [controlCom, setcontrolCom] = useState("8")

  // QuestionStart
  const changeControl = (newControl) =>{
    setcontrolCom(newControl)
  }

  return (
    <div>
      {controlCom==="1" && <QuestionStart controlCom={controlCom}/>}
      {controlCom==="2" &&<QuestionOneEVModel/>}
      {controlCom==="3" &&<QuestionTwoJourney/>}
      {controlCom==="4" &&<QuestionThreeTraveler/>}
      {controlCom==="5" &&<QuestionFourCar/>}
      {controlCom==="6" &&<QuestionFiveFuel/>}
      {controlCom==="7" &&<QuestionSixFuel/>}
      {controlCom==="8" &&<QuestionSevenCharging/>}
    </div>

  )
}
