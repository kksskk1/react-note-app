import {createGlobalStyle} from 'styled-components';
import backgroundImage from '../images/background.png';

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        height: 100vh;
        background-image: url(${backgroundImage});
        background-size: 100% 100%;
        overflow-y: scroll;
    }
`;