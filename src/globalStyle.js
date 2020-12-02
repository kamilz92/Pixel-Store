
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --primary-color: #e09900;
        --secondary-color: #1D2528;
    }
    html {
        font-size: 62.5%;
    }
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Press Start 2P', cursive;
    }
    a {
        text-decoration: none;
        color: #000;
    }
`;
