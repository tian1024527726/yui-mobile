import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Icon from '../icon';

class InputNumber extends React.Component {
  static displayName = 'InputNumber'

  constructor(props) {
    super(props);
    //判断组件是否销毁

    this.state = {
      value: props.value || '',
      visible: props.showCursor || false,
      v_msg: props.rule && props.rule.msg || '',
      v_emptymsg: props.rule && props.rule.emptymsg || '',
    }
  }
  componentDidMount() { }

  componentWillReceiveProps(nextProps) {
    this.setState({
      value: nextProps.value,
      visible: nextProps.showCursor
    })
  }

  componentWillUnmount() { }

  handleCleanClick = (e) => {
    const { onClean } = this.props;
    if (onClean) {
      onClean(e)
    } else {
      this.setState({
        value: ''
      })
    }
  }

  handleClick = (e) => {
    const { onClick } = this.props;

    if (onClick) onClick(e);
  }

  render() {
    const {
      bordered, className, showClean, addonBefore, addonAfter, prefix, rule, name,
      suffix, placeholder, onClean, showCursor, children, showWarning, ...restProps
    } = this.props;
    const { onfocus, value, v_emptymsg, v_msg } = this.state;

    let renderAddonBefore = null;
    if (addonBefore) {
      renderAddonBefore = <span className='input-group-add'>{addonBefore}</span>
    }

    let renderAddonAfter = null;
    if (addonAfter) {
      renderAddonAfter = <span className='input-group-add'>{renderAddonAfter}</span>
    }

    const prefixIcon = prefix ? prefix : null;

    let suffixIcon = value && showClean ? <div className='icon_clean' onClick={this.handleCleanClick}></div> : suffix ? suffix : null;

    if (showWarning == true) {
      if (!value) {
        suffixIcon = v_emptymsg && <div className='icon_warning' ><div className='msg'>{v_emptymsg}</div></div>
      } else {
        suffixIcon = v_msg && <div className='icon_warning' ><div className='msg'>{v_msg}</div></div>
      }
    }

    const inputCls = classNames('input', className, {
      ['bordered']: bordered
    });

    const inputContentCls = classNames('input-content', {
      ['is-focus']: this.state.visible
    })

    return (
      <div className={inputCls}>
        {prefixIcon && React.cloneElement(
          prefixIcon,
          {}
        )}
        {renderAddonBefore}
        <div {...restProps} className={inputContentCls} onClick={this.handleClick}>
          {!value && <div className='input-placeholder'>{placeholder}</div>}
          {value}
          <input
            ref='input'
            type='hidden'
            name={name}
            value={value}
          />
        </div>
        {renderAddonAfter}
        {suffixIcon && React.cloneElement(
          suffixIcon, {}
        )}
        {children && children}
      </div>
    );
  }

}

InputNumber.propTypes = {
  bordered: PropTypes.bool,
  showClean: PropTypes.bool,
  onClean: PropTypes.func,
  showCursor: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'default', 'large']),
  value: PropTypes.any,
  className: PropTypes.string,
  addonBefore: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  addonAfter: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  onClick: PropTypes.func,
  rule: PropTypes.object,
  showWarning: PropTypes.bool
}

export default InputNumber
