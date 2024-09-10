import React from 'react'
import { Theme } from './theme'

function UseTheme() {
  return (
    <div>
    <div style={{backgroundColor:Theme.dark.main,color:Theme.dark.text,width:'500px',height:'500px'}}>this is for black</div>
    <div style={{backgroundColor:Theme.light.main,color:Theme.light.text,width:'500px',height:'500px'}}>this is for white</div>
    </div>
  )
}

export default UseTheme
