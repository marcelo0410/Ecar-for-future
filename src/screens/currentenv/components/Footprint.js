import React from 'react'
import footPrintPhoto from '../../../assets/currentenv/footprint.jpg'
export default function Footprint() {
  return (
    <div>
        <div style={{display:"flex", marginTop:"20px"}}>
            <img src={footPrintPhoto} style={{height:"480px", width:"720px"}}></img>
            <p className='text-start ps-3' style={{paddingTop:"60px"}}>According to the data from Department of Inductry, Science, Energy and Resources of Australia, the greenhouse gas emissions in 2021 reached to 494.2 million tonnes, representing per capita CO₂-e emissions of 19 tones, four times the global average. Although it seems at the lowest level on record, continue decrease in transport emissions due to COVID-19 restrictions is a major reason of this reduction, which is the third largest sources of carbon emissions in Australia.</p>
        </div>
    </div>
  )
}
