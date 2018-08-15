import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';


class Label extends React.Component {
  static displayName = 'Label';

  constructor(props){
    super(props)
  }

  isPresetColor(color){
    if (!color) { return false };
    return (
      /^(white|black|light|dark|primary|info|link|warning|danger|success|black-bis|black-ter|grey-darker|grey-dark|grey|grey-light|grey-lighter|white-ter|white-bis)$/
      .test(color)
    );
  }

  render(){
    const {
      size, color, nodeType, className, children, ...restProps
    } = this.props;
    let ComponentProp ;
    switch(nodeType){
      case 'div':
        ComponentProp = 'div';
        break;
      case 'p':
        ComponentProp = 'p';
        break;
      default:
        ComponentProp = 'span';
        break;
    }
    const isPresetColor = this.isPresetColor(color);
    const labelCls = classNames('label', className, {
      [`is-${color}`]: isPresetColor,
      [`is-${size}`]: size
    })

    return (
      <ComponentProp
        className={labelCls}
        {...restProps}
      >
      {children}
      </ComponentProp>
    )
  }
}

Label.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  className: PropTypes.string
}

export default Label
