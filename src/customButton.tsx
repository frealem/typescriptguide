import React from 'react'

type buttonProps={
    variant:'Primary' | 'Secondary'
    children:string
} & React.ComponentProps<'button'>
function CustomButton({variant,children,...rest}:buttonProps) {
  return (
    <button className={`class-with-${variant}`} {...rest}>
      {children}
    </button>
  )
}

export default CustomButton
