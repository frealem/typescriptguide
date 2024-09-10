import React from 'react'
//this about the number can be -ve or +ve or 0 not can be the value both so three

type randomNumber={
    value:number
}
type positiveProps=randomNumber & {
    isPositive:Boolean
    isNegative?:never
    isZero?:never
}

type NegativeProps=randomNumber & {
    isPositive?:never
    isNegative:Boolean
    isZero?:never
}

type zeroProps=randomNumber & {
    isPositive?:never
    isNegative?:never
    isZero:Boolean
}

type allProps=zeroProps|NegativeProps|positiveProps
function restrictProps({isZero,isNegative,isPositive,value}:allProps) {
  return (
    <div>
     {value}{isNegative && 'negative'}{isPositive && 'positive'} {isZero && 'zero'}
    </div>
  )
}

export default restrictProps
