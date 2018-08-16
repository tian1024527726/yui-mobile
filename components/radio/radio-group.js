import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

function getCheckedValue(radios) {
  let value = null;
  let matched = false;
  radios.forEach((radio) => {
    if (radio && radio.props && radio.props.checked) {
      value = radio.props.value;
      matched = true;
    }
  });
  return matched ? { value } : undefined;
}

class RadioGroup extends React.Component {
  static displayName = 'radioGroup'

  constructor(props) {
    super(props)

    let value;
    if ('value' in props) {
      value = props.value;
    } else if ('defaultValue' in props) {
      value = props.defaultValue;
    } else {
      const checkedValue = getCheckedValue(props.children);
      value = checkedValue && checkedValue.value;
    }
    this.state = {
      value,
    };
  }

  static childContextTypes = {
    radioGroup: PropTypes.any,
  };

  getChildContext() {
    return {
      radioGroup: {
        onChange: this.onRadioChange,
        value: this.state.value,
        disabled: this.props.disabled,
        name: this.props.name,
      },
    };
  }

  onRadioChange = (ev) => {
    const lastValue = this.state.value;
    const { value } = ev.target;
    if (!('value' in this.props)) {
      this.setState({
        value,
      });
    }

    const onChange = this.props.onChange;
    if (onChange && value !== lastValue) {
      onChange(ev.target.value);
    }
  }

  render() {
    const { className, style, type } = this.props;
    const radioGroupCls = classNames('radio-group', className,{
      ['radio-button-group']: type == 'button'
    });

    return (
      <div className={radioGroupCls} style={style}>
        {React.Children.map(this.props.children, (child, i) => {
          return (
            <div className='radio-group-item'>
              {child}
            </div>
          )
        })}
      </div>
    )
  }

}

RadioGroup.childContextTypes = {
  radioGroup: PropTypes.any,
}

RadioGroup.propTypes = {
  type: PropTypes.oneOf(['normal','button']),
  name: PropTypes.string,
  defaultValue: PropTypes.string,
  value: PropTypes.string,
  size: PropTypes.oneOf(['small', 'default', 'large']),
  onChange: PropTypes.func
}

export default RadioGroup
