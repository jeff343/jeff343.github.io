import { createGlobalStyle } from "styled-components";

import mountainPic from "../assets/images/mountain-pic.jpg";


const GlobalStyles = createGlobalStyle`
    body {
        background: ${props => props.theme.background};
        color: ${props => props.theme.color};
    }
`;

const lightTheme = {
    background: '#fcfcfc',
    primary: '#e8f0fa',
    secondary: '#cee0f4',
    tertiary: '#5170bf',
    dark: '#3f3f70',
    bgimg: `linear-gradient(rgba(255,255,255,.8), rgba(255,255,255,.5)), url(${mountainPic})`,
    color: 'black'
};

const darkTheme = {
    background: '#050828',
    // primary: '',
    secondary: '#65809F',
    tertiary: '#C0C4CF',
    dark: '#c8c8c8',
    bgimg: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.8)), url(${mountainPic})`,
    color: 'white'
};

export { GlobalStyles };
export { lightTheme };
export { darkTheme };