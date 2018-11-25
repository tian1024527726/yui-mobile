import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

class Icon extends React.Component {
  static displayName = 'Icon'

  render () {
    const { className, size, type, color, ...restProps } = this.props
    const containerCls = classnames('icon','yztIcon', `yzt-icon-${type}`,className, {
      [`is-${size}`]: size,
      [`is-${color}`]: color
    })

    return (
      <i className={containerCls} {...restProps}></i>
    )
  }
}

Icon.propTypes = {
  size: PropTypes.oneOf(['xs','s', 'sm', 'dm', 'm', 'sl', 'l']),
  type: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func
}

export default Icon
