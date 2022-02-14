import { createGlobalStyle } from 'styled-components';
import media from 'styled-media-query';

const GlobalStyle = createGlobalStyle`
:root {
  --font-body: Karla, Helvetica Neue, sans-serif;
  --font-headings: Roboto, Helvetica Neue, sans-serif;

  /* FONT SIZES */

  --font-size-base: 16px;
  --font-size-xxs: 0.296rem;
  --font-size-xs: 0.444rem;
  --font-size-sm: 0.667rem;
  --font-size: 1rem;
  --font-size-md: 1.5rem;
  --font-size-lg: 2.25rem;
  --font-size-xl: 3.375rem;
  --font-size-xxl: 5.068rem;
  --font-size-huge: 7.594rem;
  --font-size-jumbo: 11.391rem;

  /* SPACING */

  --size-xxs: 4px;
  --size-xs: 7px;
  --size-sm: 11px;
  --size: 16px;
  --size-md: 24px;
  --size-lg: 36px;
  --size-xl: 54px;
  --size-xxl: 81px;
  --size-huge: 121px;
  --size-jumbo: 182px;

  /* COLORS */

  --color-primary: #121212;
  --color-secondary: #bb86fc;
  --color-tertiary: #03dac6;
  --color-quaternary: #cf6679;
  --color-quinary: #272727;
  --color-white: #fff;
  --color-black: #282828;

  --c-action: var(--color-secondary);
  --c-danger: var(--color-quaternary);
  --c-success: var(--color-tertiary);
  --c-info: var(--color-tertiary);
  --c-bg: var(--color-primary);
  --c-bg--secondary: var(--color-quinary);

  --c-text: var(--color-white);
  --c-text--inverse: var(--color-black);
  --c-text--emphasys: var(--color-secondary);

  /* Z-index */

  --z-base: 0;
  --z-ground: 1;
  --z-ceiling: 10;
  --z-sky: 20;

  ${media.greaterThan('huge')`
    --font-size-base: 18px;
    --size-xxs: 6px;
    --size-xs: 8px;
    --size-sm: 13px;
    --size: 20px;
    --size-md: 30px;
    --size-lg: 40px;
    --size-xl: 58px;
    --size-xxl: 92px;
    --size-huge: 130px;
    --size-jumbo: 150px;
  `}
}

html {
  background: var(--c-bg);
  font-family: var(--font-body);
  font-size: var(--font-size-base);
  scroll-behavior: smooth;
}

html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}

*,
*:before,
*:after {
  box-sizing: border-box;
}
a {
  color: var(--c-action);
}
`;

export default GlobalStyle;
