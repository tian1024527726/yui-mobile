import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class Checkbox extends React.Component {
  static displayName = 'Checkbox'

  static contextTypes = {
    checkboxGroup: PropTypes.any,
  }

  constructor(props) {
    super(props);
    this.state = {
      checked: props.checked || false
    }
  }
  handleClick = (e) => {
    const { onChange } = this.props;
    this.setState({
      checked: !this.state.checked
    })
    onChange && onChange(e);
  }
  componentWillReceiveProps(nextProps){
    if('checked' in nextProps){
      this.setState({
        checked: nextProps.checked
      })
    }
  }
  render() {
    const {
      onChange, className, style, children, type, ...restProps
    } = this.props;
    const { checked } = this.state;
    const { checkboxGroup } = this.context;
    let checkboxProps = { ...restProps };
    let checkboxInnerName ;
    switch(type){
      case 'normal':
        checkboxInnerName = 'normal';
        break;
      case 'circle':
        checkboxInnerName = 'circle';
        break;
      default:
        checkboxInnerName = 'normal'
    }

    if (checkboxGroup) {
      checkboxProps.name = checkboxGroup.name;
      checkboxProps.onChange = () => checkboxGroup.onChange(this.props.value);
      checkboxProps.checked = checkboxGroup.value.indexOf(this.props.value) !== -1;
      checkboxProps.disabled = this.props.disabled || checkboxGroup.disabled;
    }
    const checkboxCls = classNames('checkbox', className, {
      ['is-active']: checkboxGroup ? checkboxProps.checked : checked
    });
    const checkboxInnerCls = classNames({
      [`checkbox-inner-${checkboxInnerName}`]: true
    });
    return (
      <label
        className={'checkbox-wrapper'}
        style={style}
      >
        <span className={checkboxCls}>
          <input
            className='checkbox-input'
            type='checkbox'
            onChange={this.handleClick}
            {...checkboxProps}
          />
          <span className={checkboxInnerCls}></span>
        </span>
        {children !== undefined ? <div>{children}</div> : null}
      </label>
    )
  }
}


Checkbox.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  type:PropTypes.oneOf(['normal','circle'])
}

export default Checkbox;
