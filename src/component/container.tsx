import React from 'react'

type containerprops={
    styles:React.CSSProperties
}

function Container(props:containerprops) {
  return (
    <div style={props.styles}>
      
    </div>
  )
}

export default Container
