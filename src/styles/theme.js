import { createGlobalStyle } from "styled-components";
import mountainPic from "../assets/images/mountain-pic.jpg";


const GlobalStyles = createGlobalStyle`
    body {
        background-color: ${props => props.theme.background};
        color: ${props => props.theme.color};
        transition: background-color 0.5s linear;
        transition: color 0.5s linear;
    }
`;


const lightTheme = {
    background: '#f8f9fb',
    primary: '#e8f0fa',
    secondary: '#cee0f4',
    tertiary: '#5170bf',
    bgimg: `linear-gradient(rgba(255,255,255,0), rgba(255,255,255,.9)), url(${mountainPic})`,
    color: '#3f3f70'
};

const darkTheme = {
    background: '#121416',
    primary: '#1c1c1c',
    secondary: '#C0C4CF',
    tertiary: '#c8c8c8',
    bgimg: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.9)), url(${mountainPic})`,
    color: 'white'
};

export { GlobalStyles };
export { lightTheme };
export { darkTheme };