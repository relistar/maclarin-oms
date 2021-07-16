import {css, Global} from '@emotion/core'
import emotionNormalize from 'emotion-normalize';

export const globalStyles = (
    <Global styles={css`
      ${emotionNormalize}
      * {
        box-sizing: border-box;
        border: none;
        box-shadow: none;
      }
      
      h1, h2, h3, h4, h5, h6 {
        margin: 0;
      }

      body {
        font-family: 'Open Sans', sans-serif;
        font-size: 14px;
      }
    `}
    />
)