import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class Tag extends React.Component {
  static displayName = 'Tag'

  constructor(props){

    super(props)
  }

  isPresetColor(color){
    if (!color) { return false };
    return (
      /^(info|warning|danger|success)$/
      .test(color)
    );
  }

  render(){
    const {
      color, size, shape, className, filled, children, ...restProps
    } = this.props;

    let shapeCls = '';
    switch(shape){
      case 'round':
        shapeCls = 'rounded';
        break;
      default:
        break;
    }

    const isPresetColor = this.isPresetColor(color);
    const tagCls = classNames('tag', className, {
      [`is-${size}`]: size,
      [`is-${color}`]: isPresetColor,
      [`is-filled`]: filled,
      [`is-${shapeCls}`]: shapeCls
    })

    return (
      <span
        className={tagCls}
        {...restProps}
      >
      {children}
      </span>
    )
  }
}

Tag.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  color: PropTypes.string,
  shape: PropTypes.oneOf(['round']),
  filled: PropTypes.bool,
  className: PropTypes.string
}

export default Tag
