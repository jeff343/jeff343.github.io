import { createGlobalStyle } from "styled-components";

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
    color: 'black'
};

const darkTheme = {
    background: '#050828',
    primary: '#06325E',
    secondary: '#65809F',
    tertiary: '#C0C4CF',
    color: 'white'
};

export { GlobalStyles };
export { lightTheme };
export { darkTheme };