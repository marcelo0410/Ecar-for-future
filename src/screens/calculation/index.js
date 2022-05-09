import React,{useEffect} from 'react'
import Calculator from './components/CalculatorCanvas'
export default function Index() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
        <Calculator/>
    </div>
  )
}
