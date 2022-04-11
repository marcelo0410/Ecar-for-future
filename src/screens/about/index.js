import React from 'react'
import Banner from './components/Banner'
import Members from './components/Member'

export default function index() {
    return (
      <div style={{paddingTop:"50px"}}>
          <Banner/>
          <Members/>
      </div>
    )
  }