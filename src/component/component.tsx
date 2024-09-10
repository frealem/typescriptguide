import React from 'react'
// to pass the components
type compoProps={
    children:React.ReactNode
}
function Componenter(props:compoProps) {
  return (
    <div>{props.children}</div>
  )
}

export default Componenter