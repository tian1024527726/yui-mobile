import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class Radio extends React.Component {
  static displayName = 'radio'

  static contextTypes = {
    radioGroup: PropTypes.any,
  };
  constructor(context,props) {
    super(context,props)
    this.state = {
      checked: props.checked || false
    }
  }
  componentWillReceiveProps(nextProps){
    if('checked' in nextProps){
      this.setState({
        checked: nextProps.checked
      })
    }
  }
  handleClick = (e) => {
    const { onChange } = this.props;

    onChange && onChange(e);
  }
  render() {
    const {
      value, className, style, children, onChange, type, ...restProps
    } = this.props;
    const { radioGroup } = this.context;
    let radioProps = { ...restProps };
    let radioInnerName ;
    switch(type){
      case 'normal':
        radioInnerName = 'normal';
        break;
      case 'block':
        radioInnerName = 'block';
        break;
      default:
        radioInnerName = 'normal'
    }
    if (radioGroup) {
      radioProps.name = radioGroup.name;
      radioProps.onChange = radioGroup.onChange;
      radioProps.checked = this.props.value === radioGroup.value;
      radioProps.disabled = this.props.disabled || radioGroup.disabled;
    }

    const radioCls = classNames('radio-normal',{
      ['is-active'] : radioProps.checked
    })
    const radioInnerCls = classNames({
      [`radio-normal-inner-${radioInnerName}`] : true
    })
    const radioWrapperCls = classNames('radio-normal-wrapper',className)
    return (
      <label
        className={radioWrapperCls}
        style={style}>
        <span className={radioCls}>
          <input
            className='radio-normal-input'
            type='radio'
            value={value}
            onChange={this.handleClick}
            {...radioProps}
          />
          <span className={radioInnerCls}></span>
        </span>
        {children !== undefined ? <div>{children}</div> : null}
      </label>
    )
  }

}

Radio.propTypes = {
  value: PropTypes.any,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  type: PropTypes.oneOf(['normal','block'])
}

export default Radio
