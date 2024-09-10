import React from 'react'
import { createContext } from 'react'
import { Theme } from './theme'


type themeContextProps={
    children:React.ReactNode
}

const ThemeContext=createContext(Theme)

export const ThemeContextProvider=({children}:themeContextProps)=>{
    return <ThemeContext.Provider value={Theme}>{children}</ThemeContext.Provider>
}

