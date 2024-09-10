import React from 'react'

type inputProps={
    value:string,
    handleChange:(event:React.ChangeEvent<HTMLInputElement>)=>void
}
function InputCustom(props:inputProps) {

    const handleInputChange=(event:React.ChangeEvent<HTMLInputElement>)=>{console.log(event)}
  return (
    // <input type='text' value={props.value} onChange={handleChange}/>
<input type='text' value={props.value} onChange={handleInputChange} />
  )
}

export default InputCustom
