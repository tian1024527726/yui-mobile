import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class Switch extends React.Component {
  static displayName = 'Switch'
  constructor(props){
    super(props);
    this.state = {
      checked: props.checked || false
    }
  }

  handleClick = (e) => {
    const { onChange } = this.props;
    this.setState({
      checked: !this.state.checked
    },() => {
      onChange && onChange(this.state.checked);
    })

  }

  render(){
    const {
      onChange, className, size, ...restProps
    } = this.props;
    const switchCls = classNames('switch', className, {
      ['is-active']: this.state.checked,
      [`is-${size}`]: size
    })
    return (
      <span
        className={switchCls}
        {...restProps}
        onClick={this.handleClick}
      ></span>
    )
  }
}

Switch.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  size: PropTypes.oneOf(['xs','s', 'sm', 'dm', 'm', 'sl', 'l'])
}

export default Switch ;
