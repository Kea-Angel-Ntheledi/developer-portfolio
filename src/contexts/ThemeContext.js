import React, { createContext, useState, useEffect } from 'react'

import { themeData } from '../data/themeData'

export const ThemeContext = createContext()

const DARK_QUERY = '(prefers-color-scheme: dark)'

// Light is the fallback when the device has no preference or the browser can't tell.
const getSystemTheme = () => {
    if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia(DARK_QUERY).matches) {
        return themeData.dark
    }
    return themeData.light
}

function ThemeContextProvider(props) {
    const [theme, setTheme] = useState(getSystemTheme)
    const [drawerOpen, setDrawerOpen] = useState(false)

    // Follow the device setting, including if it changes while the site is open
    useEffect(() => {
        if (!window.matchMedia) return

        const mediaQuery = window.matchMedia(DARK_QUERY)
        const handleChange = (event) => {
            setTheme(event.matches ? themeData.dark : themeData.light)
        }

        if (mediaQuery.addEventListener) {
            mediaQuery.addEventListener('change', handleChange)
            return () => mediaQuery.removeEventListener('change', handleChange)
        }
        // Older Safari versions
        mediaQuery.addListener(handleChange)
        return () => mediaQuery.removeListener(handleChange)
    }, [])

    const setHandleDrawer = () => {
        setDrawerOpen(!drawerOpen)
    }

    const value = { theme, drawerOpen, setHandleDrawer }
    return (
        <ThemeContext.Provider value={value}>
            {props.children}
        </ThemeContext.Provider>
    )
}


export default ThemeContextProvider