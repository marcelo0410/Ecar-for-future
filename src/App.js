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
          <Route path="/about" element={<Homepage/>}/>
          <Route path="/test" element={<QuarterlyEmissionCanvas/>}/>
          
          {/* <Route path="/test" element={<Test scrollHeight={4000} width={1158} height={770} numFrames={63}/>}/> */}
          
          <Route path="/" element={<Navigate replace to="/login"/>} />
        </Routes>
        <Footer/>
        </div>
      </div>
    </Router>
  );
}

export default App;
