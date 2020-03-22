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
`;
