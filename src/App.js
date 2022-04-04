import {BrowserRouter as Router, Routes,Route, Navigate } from 'react-router-dom'
import Menu from './components/Menu';
import Footer from './components/Footer';
import Homepage from './screens/Home/index';
import CurrentEnv from './screens/currentenv/index'
import './App.css';
function App() {
  return (
    <Router>
      <div className="App container">
      <Menu/>
      <Routes>
        <Route path="/home" element={<Homepage/>}/>
        <Route path="/curenv" element={<CurrentEnv/>}/>
        <Route path="/" element={<Navigate replace to="/home"/>} />
      </Routes>
      <Footer/>
      </div>
    </Router>
  );
}

export default App;
