import { createGlobalStyle } from 'styled-components';
import '../assets/sass/globals.scss';

export default createGlobalStyle`
    html, body {
        margin: 0px;
        padding: 0px;
        height: 100%;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background: ${props => props.theme.colors.background}
    }

    h1, h2, h3, h4, h5, h6 {
        margin: 0px;
    }
  
    ::selection {
        background: $darkest;
        color: $light;    
    }
  
    * {
        box-sizing: border-box;
    }  

    ::-webkit-scrollbar-track {
        background-color: #F4F4F4;
    }

    ::-webkit-scrollbar {
        width: 12px;
        background: #FCFCFC;
    }

    ::-webkit-scrollbar-thumb {
        background: #B2B2B2;
        border-radius: 6px;
    }

    ::-webkit-scrollbar-thumb:vertical:hover{
        background: #999999;
    }
`;
