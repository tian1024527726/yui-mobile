import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class Link extends React.Component {
  static displayName = 'Link'

  constructor(props){
    super(props);
  }

  render(){
    const {
      size, className, children, ...restProps
    } = this.props;

    const ComponentProp = restProps.href ? 'a' : 'div';

    const linkCls = classNames(className, 'link', {
      [`is-${size}`]: size
    })
    return (
      <ComponentProp
        className={linkCls}
        {...restProps}
      >
      {children}
      </ComponentProp>
    )
  }
}

Link.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(['large','medium','small']),
}

export default Link
