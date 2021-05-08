import React, { FC } from 'react'
import { AppProps } from 'next/app'
import Navbar from '../Navbar'

const Layout: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Navbar />
      <Component {...pageProps}  />
    </>
  )
}

export default Layout
