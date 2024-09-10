import React from 'react'

type htmlProps <E extends React.ElementType>={
    size?:'sl' | "lg"
    color?:'Primary' | 'Secondary'
    children:React.ReactNode
    as?:E
}

type TextProps<E extends React.ElementType>= htmlProps<E> &
Omit<React.ComponentProps<E>, keyof htmlProps <E>>

function HtmlElement <E extends React.ElementType='div'>({size,color,children,as}:TextProps<E>) {
    const Component=as || 'div'
  return (
    <Component className={`class-with-${size}-${color}`}>
      {children}
    </Component>
  )
}

export default HtmlElement
