/* eslint-disable @typescript-eslint/no-var-requires */
function ReactAxe() {
  if (process.env.NODE_ENV !== 'production' && typeof window !== 'undefined') {
    const React = require('react')
    const ReactDOM = require('react-dom')
    const axe = require('@axe-core/react')
    axe(React, ReactDOM, 1000)
    console.log('react-axe is running')
  }
}

export default ReactAxe
