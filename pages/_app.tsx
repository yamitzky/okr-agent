import React from 'react'
import App from 'next/app'
import { Grommet, grommet as grommetTheme } from 'grommet'
import Config from '~/lib/config'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <Config.Provider initialState={{ userId: null }}>
        <Grommet theme={grommetTheme}>
          <Component {...pageProps} />
        </Grommet>
      </Config.Provider>
    )
  }
}
