import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
const history = require("history").createBrowserHistory()


class Header extends React.Component {
  constructor() {
    super()
  }
  render() {
    const { children } = this.props;
    const activeStyle = { color: 'blue' }
    const spliter = ` | `
    return (
      <div style={{ display: "flex", height:'3rem', alignItems: 'center', padding: '1rem 0' }}>
        <Link to='/'>GO HOME</Link>
        <span style={{ margin: '0 1rem' }}>
          {spliter}
        </span>
        <span>{children}</span>
      </div>
    )
  }
}

Header.propTypes = {
  children: PropTypes.element
}

export default Header
