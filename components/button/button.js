import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Icon from '../icon';




class Button extends React.Component {
  static displayName = 'Button'

  static defaultProps = {
    timeOut: 500
  }
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
      timeOut: props.timeOut,
    }
  }

  handleClick = (e) => {
    const { timeOut } = this.state;
    const { disabled, loading } = this.props;
    if (disabled || loading) return false;

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
  }

  render() {
    const {
      type, size, icon, className, state, children, loading, timeOut, ...restProps
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
  timeOut: PropTypes.number
}

export default Button
