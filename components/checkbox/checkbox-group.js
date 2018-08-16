import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

function getCheckedValue(checkboxes) {
  let value = null;
  let matched = false;
  checkboxes.forEach((checkbox) => {
    if (checkbox && checkbox.props && checkbox.props.checked) {
      value = checkbox.props.value;
      matched = true;
    }
  });
  return matched ? { value } : undefined;
}

class CheckboxGroup extends React.Component {
  static displayName = 'checkboxGroup'

  constructor(props) {
    super(props)

    let value = null;
    if ('value' in props) {
      value = props.value;
    } else if ('defaultValue' in props) {
      value = props.defaultValue;
    } else {
      const checkedValue = getCheckedValue(props.children);
      value = checkedValue && checkedValue.value
    }
    value = value || [];
    this.state = {
      value,
    };
  }

  static childContextTypes = {
    checkboxGroup: PropTypes.any,
  };

  getChildContext() {
    return {
      checkboxGroup: {
        onChange: this.onCheckboxChange,
        value: this.state.value,
        disabled: this.props.disabled,
        name: this.props.name,
      },
    };
  }
  componentWillReceiveProps(nextProps){
    this.setState({
      value: nextProps.value || [],
    });
  }
  onCheckboxChange = (CurrentValue) => {
    const optionIndex = this.state.value.indexOf(CurrentValue);
    const value = [...this.state.value];
    if (optionIndex === - 1) {
      value.push(CurrentValue);
    } else {
      value.splice(optionIndex, 1);
    }
    if (!('value' in this.props)) {
      this.setState({ value });
    }
    const onChange = this.props.onChange;
    if (onChange) {
      onChange(value);
    }
  }

  render() {
    const { className, style } = this.props;
    const checkboxGroupCls = classNames('checkbox-group', className)
    return (
      <div className={checkboxGroupCls} style={style}>
        {React.Children.map(this.props.children, (child, i) => {
          return (
            <div className='checkbox-group-item'>
              {child}
            </div>
          )
        })}
      </div>
    )
  }

}

CheckboxGroup.childContextTypes = {
  checkboxGroup: PropTypes.any,
}

CheckboxGroup.propTypes = {
  name: PropTypes.string,
  defaultValue: PropTypes.string,
  value: PropTypes.array,
  size: PropTypes.oneOf(['small', 'default', 'large']),
  onChange: PropTypes.func
}

export default CheckboxGroup
