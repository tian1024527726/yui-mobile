import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Icon from '../icon';




class Button extends React.Component {
  static displayName = 'Button'

  static defaultProps = {
    timeOut: 500,
    delayTimeout: 1000
  }
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
      timeOut: props.timeOut,
      delayTimeout: props.delayTimeout
    }
  }

  handleClick = (e) => {
    const { timeOut } = this.state;
    this.setState({ clicked: true });
    clearTimeout(this.timeOut);
    this.timeOut = window.setTimeout(() => this.setState({ clicked: false }), timeOut);

    const onClick = this.props.onClick;
    if (onClick && !this.state.clicked) {
      onClick(e);
    }
  }

  componentWillUnmount() {

    if (this.timeOut) {
      clearTimeout(this.timeOut)
    }
    if (this.delayTimeout) {
      clearTimeout(this.delayTimeout)
    }
  }

  render() {
    const {
      type, size, icon, className, state, children, loading, timeOut, delayTimeout, ...restProps
    } = this.props;

    let sizeCls = '';
    switch (size) {
      case 'fullwidth':
        sizeCls = 'fullwidth';
        break;
      case 'small':
        sizeCls = 'small';
      default:
        break;
    }

    const ComponentProp = restProps.href ? 'a' : 'a';

    const buttonCls = classNames(className, 'button', {
      [`is-${sizeCls}`]: sizeCls,
      [`is-${state}`]: state,
      [`is-${type}`]: type,
      [`is-loading`]: loading
    })

    return (
        <ComponentProp
          role="button"
          className={buttonCls}
          {...restProps}
          onClick={this.handleClick}
        >
          {icon}{children}
        </ComponentProp>
    );
  }
}

Button.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary']),
  state: PropTypes.oneOf(['hovered', 'active', 'focused']),
  size: PropTypes.oneOf(['fullwidth', 'default', 'small']),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  icon: PropTypes.node,
  loading: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  className: PropTypes.string,
  timeOut: PropTypes.number,
  delayTimeout: PropTypes.number
}

export default Button
