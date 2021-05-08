import '../styles/globals.css'
import { AppProps } from 'next/app'
import React, { FC } from 'react'
import { wrapper } from '../store'
import Head from 'next/head'

import NProgress from 'nprogress'
import Router from 'next/router'

import Layout from './../components/Layout'

NProgress.configure({
  minimum: 0.3,
  easing: 'ease',
  speed: 800,
  showSpinner: true,
});

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout Component={Component} {...pageProps} />
    </>
  )
}

export default wrapper.withRedux(App)
