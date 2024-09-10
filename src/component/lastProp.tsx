import React from 'react'

type statusProps={
  status:'success'|'loading'|'error'
}
function LastProp(props:statusProps) {
  return (
    <div>
      this is the status check: {props.status}
    </div>
  )
}

export default LastProp