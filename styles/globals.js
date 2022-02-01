import { createGlobalStyle } from 'styled-components';
import media from 'styled-media-query';

// Add design tokens here ->

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
    }
    body{
        background: darkgrey;
    }

    ${media.greaterThan('small')`
        body{
            background: hotpink;  
        }
    `}
`;

// Add design tokens here ^^

export default GlobalStyle;
