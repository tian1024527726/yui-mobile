import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Router } from 'react-router'
import AppMain from '@site/layouts/AppMain'
import AppFooter from '@site/layouts/AppFooter'
import AppIframe from '@site/layouts/AppIframe'

/*import style sheets*/
import '@site/styles/index.scss'

export default class AppContainer extends Component {
  render() {
    const { history } = this.props
    return (
      <Router history={history}>
        <div style={{height:'100%',display:"flex",flexDirection:'column', padding:'0 1rem'}}>
          <AppMain />
          <AppFooter />
        </div>
      </Router>
    )
  }
}

AppContainer.propTypes = {
  history: PropTypes.object.isRequired
}
