import '../styles/globals.css'
import { AppProps } from 'next/app'
import React, { FC } from 'react'
import { wrapper } from '../store'

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Component {...pageProps} />
  )
}

export default wrapper.withRedux(App)
