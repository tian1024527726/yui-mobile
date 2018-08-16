import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';


class Title extends React.Component {
  static displayName = 'Title';

  constructor(props){
    super(props)
  }

  isPresetColor(color){
    if (!color) { return false };
    return (
      /^(white|black)$/
      .test(color)
    );
  }

  isPresetSize(size){
    if (!size) { return false };
    return (
      /^(1|2|3|4|5|6|7)$/
      .test(size)
    );
  }

  render(){
    const {
      size, color, className, children, ...restProps
    } = this.props;

    const isPresetColor = this.isPresetColor(color);
    const isPresetSize = this.isPresetSize(size);
    let ComponentProp;
    switch(size){
      case '1':
        ComponentProp = 'h1';
        break;
      case '2':
        ComponentProp = 'h2';
        break;
      case '3':
        ComponentProp = 'h3';
        break;
      case '4':
        ComponentProp = 'h4';
        break;
      case '5':
        ComponentProp = 'h5';
        break;
      case '6':
        ComponentProp = 'h6';
        break;
      default:
        ComponentProp = 'h1';
        break;
    }
    const titleCls = classNames('title', className, {
      [`is-${color}`]: isPresetColor,
      [`is-${size}`]: isPresetSize
    })

    return (
      <ComponentProp
        className={titleCls}
        {...restProps}
      >
      {children}
      </ComponentProp>
    )
  }
}

Title.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string
}

export default Title
