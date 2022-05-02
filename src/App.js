import {BrowserRouter as Router, Routes,Route, Navigate } from 'react-router-dom'
import Menu from './components/Menu';
import Footer from './components/Footer';
import Homepage from './screens/Home/index';
import CurrentEnv from './screens/currentenv/index'
import Calculation from './screens/calculation/index'
import Test from './screens/Test/Ani'
import Login from './components/login/Login'
import QuarterlyEmissionCanvas from './screens/currentenv/components/QuarterlyEmissionCanvas';
import './App.css';
import QuestionOneEVModel from './screens/calculation/components/QuestionOneEVModel';
import QuestionTwoJourney from './screens/calculation/components/QuestionTwoJourney';
import QuestionThreeTraveler from './screens/calculation/components/QuestionThreeTraveler';
import QuestionFourCar from './screens/calculation/components/QuestionFourCar';
import QuestionFiveFuel from './screens/calculation/components/QuestionFiveFuel';
import QuestionSixFuel from './screens/calculation/components/QuestionSixFuel'
import QuestionSevenCharging from './screens/calculation/components/QuestionSevenCharging';
import EmissionPowerBI from './screens/currentenv/components/EmissionPowerBI';
import Test1 from './screens/Test/Test1';
import About from './screens/about/index'
import Storyboard from './screens/storyboard/index';
import EmissionPrediction from './screens/prediction/index';
import PredictionGraph from './screens/predictiongraph/index';

function App() {
  return (
    <Router>
      <div style={{backgroundColor:"#FAFAFA"}}>
        <div className="App containerr">
        <Menu/>
        <Routes>
          <Route path="/home" element={<Homepage/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/curenv" element={<CurrentEnv/>}/>
          <Route path="/calculator" element={<Calculation/>}/>
          <Route path="/about" element={<About/>}/>
          {/* <Route path="/test" element={<EmissionPowerBI/>}/> */}
          <Route path="/q1" element={<QuestionOneEVModel/>}/>
          <Route path="/q2" element={<QuestionTwoJourney/>}/>
          <Route path="/q3" element={<QuestionThreeTraveler/>}/>
          <Route path="/q4" element={<QuestionFourCar/>}/>
          <Route path="/q5" element={<QuestionFiveFuel/>}/>
          <Route path="/q6" element={<QuestionSixFuel/>}/>
          <Route path="/q7" element={<QuestionSevenCharging/>}/>
          <Route path="/current" element={<Storyboard/>}/>
          <Route path="/pp" element={<EmissionPrediction/>}/>
          <Route path="/prediction" element={<PredictionGraph/>}/>
          <Route path="/storyboard" element={<Storyboard/>}/>
          {/* <Route path="/test" element={<Test scrollHeight={4000} width={1158} height={770} numFrames={63}/>}/> */}
          
          <Route path="/" element={<Navigate replace to="/home"/>} />
        </Routes>
        {/* <Footer/> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
