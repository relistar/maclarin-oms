import React from "react"
import {globalStyles} from '../shared/styles'
import { ThemeProvider } from '@emotion/react'
import theme from "../shared/theme";

export default function MyApp({Component, pageProps}) {
    return (
        <ThemeProvider theme={theme}>
            {globalStyles}
            <Component {...pageProps} />
        </ThemeProvider>
    )
}
