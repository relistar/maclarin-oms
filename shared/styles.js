import {css, Global} from '@emotion/react'
import emotionNormalize from 'emotion-normalize';
import nextImg from "../public/images/chevron-right.svg";
import prevImg from "../public/images/chevron-left.svg";

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

      .swiper-container {
        overflow: visible;
      }

      .swiper-slide {
        width: auto !important;

        &:first-child {
          margin-right: 13px!important;
          margin-left: 30px;
        }
      }

      .swiper-button-prev {
        top: -23px;
        right: 82px;
        left: auto;
        width: 9.17px;
        height: 14px;
        background-image: url(${prevImg.src});
        background-repeat: no-repeat;
        background-size: 100% auto;
        background-position: center;

        &:after {
          display: none;
        }
      }

      .swiper-button-next {
        top: -23px;
        right: 45px;

        width: 9.17px;
        height: 14px;

        background-image: url(${nextImg.src});
        background-repeat: no-repeat;
        background-size: 100% auto;
        background-position: center;

        &:after {
          display: none;
        }
      }
    `}
    />
)