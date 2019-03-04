import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Icon from '../icon';

class Input extends React.Component {
  static displayName = 'Input'

  constructor(props) {
    super(props);

    const v_regExp = props.rule && props.rule.regExp || /.*/;
    const value = 'value' in props ? props.value || '' : props.defaultValue || '';
    const v_status = value ? v_regExp.test(value) : true;

    this.state = {
      v_status: v_status,
      onfocus: false,
      v_regExp: v_regExp,
      v_msg: props.rule && props.rule.msg || '',
      v_emptymsg: props.rule && props.rule.emptymsg || '',
      value: value
    }
  }

  focus = () => {
    this.input.focus();
  }

  validate = (fn) => {
    const { value, v_regExp } = this.state;
    if (fn) {
      fn(v_regExp.test(value), value);
    }
    return v_regExp.test(value);
  }

  handleKeyDown = (e) => {
    const { onPressEnter, onKeyDown } = this.props;
    if (e.keyCode === 13 && onPressEnter) {
      onPressEnter(e);
    }
    if (onKeyDown) {
      onKeyDown(e);
    }
  }

  handleFocus = (e) => {
    const { onFocus } = this.props;
    this.setState({
      v_status: true,
      onfocus: true
    });

    onFocus && onFocus(e);
  }

  handleBlur = (e) => {
    const { onBlur } = this.props;
    if (this.input) {
      this.debounceTimeout = setTimeout(() => {
        if (document.activeElement != this.input) {
          this.setState({
            v_status: this.state.v_regExp.test(this.input.value),
            onfocus: false
          }, () => {
            onBlur && onBlur(this.state.v_regExp.test(this.input.value), this.input.value);
          })
        }
      }, 100);
    }
  }

  handleChange = (e) => {
    const { onChange } = this.props;

    if('value' in this.props){

    }else{
      this.setState({
        value: e.target.value
      })
    }
    if (onChange) onChange(e.target.value);
  }

  handleCleanClick = (e) => {
    const { onClean } = this.props;

    this.setState({
      value: ''
    })

    this.input.focus();
    onClean && onClean(e);
  }

  componentWillReceiveProps(nextProps) {
    if ('value' in nextProps) {
      const v_regExp = nextProps.rule && nextProps.rule.regExp || /.*/;
      const value = nextProps.value || '';
      const v_status = v_regExp.test(value);

      this.setState({
        value: nextProps.value,
        v_status: v_status
      })
    }
  }

  componentWillUnmount() {
    if (this.debounceTimeout) {
      clearTimeout(this.debounceTimeout);
      this.debounceTimeout = null;
    }
  }

  render() {
    const {
      type, bordered, className, style, addonBefore, addonAfter,
      onPressEnter, prefix, suffix, showClean, rule, showWarning, onClean, children, ...restProps
    } = this.props;
    const { onfocus, value, v_status, v_emptymsg, v_msg } = this.state;
    const inputType = type || 'text';

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

    if (showWarning == undefined) {
      if (!v_status && !onfocus) {
        if (!value) {
          suffixIcon = v_emptymsg && <div className='icon_warning' ><div className='msg'>{v_emptymsg}</div></div>
        } else {
          suffixIcon = v_msg && <div className='icon_warning' ><div className='msg'>{v_msg}</div></div>
        }
      }
    } else if (showWarning == true) {
      if (!value) {
        suffixIcon = v_emptymsg && <div className='icon_warning' ><div className='msg'>{v_emptymsg}</div></div>
      } else {
        suffixIcon = v_msg && <div className='icon_warning' ><div className='msg'>{v_msg}</div></div>
      }
    }

    if ('value' in restProps) {
      restProps.value = value;
      delete restProps.defaultValue;
    }

    const inputCls = classNames('input', className, {
      ['bordered']: bordered
    });

    return (
      <div className={inputCls} style={style}>
        {prefixIcon && React.cloneElement(
          prefixIcon,
          {}
        )}
        {renderAddonBefore}
        <div className='input-control'>
          <input
            ref={node => this.input = node}
            {...restProps}
            type={inputType}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            onChange={this.handleChange}
            onKeyDown={this.handleKeyDown}
          />
        </div>
        {renderAddonAfter}
        {suffixIcon && React.cloneElement(
          suffixIcon,
          {}
        )}
        {children}
      </div>
    );
  }

}

Input.propTypes = {
  type: PropTypes.string,
  bordered: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'default', 'large']),
  disabled: PropTypes.bool,
  showClean: PropTypes.bool,
  defaultValue: PropTypes.any,
  value: PropTypes.any,
  className: PropTypes.string,
  addonBefore: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  addonAfter: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  onPressEnter: PropTypes.func,
  onKeyDown: PropTypes.func,
  onKeyUp: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onClean: PropTypes.func,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  rule: PropTypes.object,
  showWarning: PropTypes.bool
}

export default Input
