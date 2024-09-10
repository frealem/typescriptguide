import React from 'react'
import { personProps } from './person.types'

function Person(props:personProps) {
  return (
    <div>
   my name: {props.first}
   my last name {props.last}
   my age {props.age}
    </div>
  )
}

export default Person
