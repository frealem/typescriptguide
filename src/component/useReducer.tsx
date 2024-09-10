import React, { useReducer } from 'react'

const initialState={
    count:0
}

type statetype={
    count:number
}
type actiontype={
    type:string
    payload:number
}

function reducer(state:statetype,action:actiontype){
    switch(action.type){
        case 'increment':
            return {count:state.count + action.payload}
        case 'decrement':
            return{count:state.count-action.payload}
        default:
            return state 
    }
}

function useReducers() {
const [state,dispatch]=useReducer(reducer,initialState)

  return (
    <div>
     <h1> {state.count}</h1>
     <button onClick={()=>dispatch({type:'increment',payload:6})}>increment</button>
     <button onClick={()=>dispatch({type:'decrement',payload:6})}>decrement</button>
    </div>
  )
}

export default useReducers
