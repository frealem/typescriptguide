import React, { useState } from 'react'

type authUser={
    name:string,
    email:string
}
function statetype() {
    const[user,setUser]=useState<authUser | null>(null);
// when you're more confident about you'll have a value in the future
    // const[user,setUser]=useState<authUser>({} as authUser)
    const handleLogin=()=>{
        setUser({
            name:'frew',
            email:'@frealem'
        })
    }
  return (
    <div>
    <p>this login {user?.email} {user?.name}</p>
    </div>
  )
}

export default statetype
