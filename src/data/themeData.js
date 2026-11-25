/* eslint-disable */
import { pinkThemeDark, pinkThemeLight } from '../theme/theme'


// Light mode: pure white background with black text.
// Everything else (accent colour, images) is inherited from the pink theme.
const customLightTheme = {
    ...pinkThemeLight,
    type: 'light',
    secondary: '#ffffff',
    secondary70: '#ffffffb3',
    secondary50: '#ffffff80',
    tertiary: '#000000',
    tertiary80: '#000000cc',
    tertiary70: '#000000b3',
    tertiary50: '#00000080'
}


// The site picks light or dark automatically from the visitor's device/browser setting.
export const themeData = {
    light: customLightTheme,
    dark: pinkThemeDark
}


// To use a different dark theme, swap pinkThemeDark above for another one from '../theme/theme'