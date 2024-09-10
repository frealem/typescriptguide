import React from 'react'
//  this to show how to pass the parent component to use as parent with his children
type typeProp={
    children:string
}

function ChildProp(props:typeProp) {
  return (
    <div>{props.children}</div>
  )
}

export default ChildProp