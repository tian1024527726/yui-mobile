import Fastclick from "fastclick";
Fastclick.attach(document.body);
import 'babel-polyfill';

import React from 'react'
import { render } from 'react-dom'
import AppContainer from './app'

const history = require("history").createBrowserHistory()
const MOUNT_NODE = document.getElementById('app')

render(
  <AppContainer history={history} />,
  MOUNT_NODE
)

if (module.hot) {
  module.hot.accept('./app', () => {
    const NewAppContainer = require('./app').default
    render(
      <NewAppContainer history={history} />,
      MOUNT_NODE
    )
  })
}
