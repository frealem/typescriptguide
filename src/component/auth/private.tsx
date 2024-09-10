import React from 'react'
import Login from './login'
import { profileProps } from './profile'

type componentProps={
    isLogin:boolean
    // Component:React.ComponentType
    // for profileProps
    component:React.ComponentType<profileProps>
}

function Private({isLogin,component:Component}:componentProps) {
  if(isLogin){
    return <Component name='frealem'/>
  }
  else{
    return <Login/>
  }
}

export default Private
