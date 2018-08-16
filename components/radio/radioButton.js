import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class RadioButton extends React.Component {
  static displayName = 'radioButton'

  static contextTypes = {
    radioGroup: PropTypes.any,
  };

  constructor(props) {
    super(props)
  }

  render() {
    const {
      value, className, children, ...restProps
    } = this.props;

    const { radioGroup } = this.context;
    let radioProps = { ...restProps };

    if (radioGroup) {
      radioProps.name = radioGroup.name;
      radioProps.onChange = radioGroup.onChange;
      radioProps.checked = this.props.value === radioGroup.value;
      radioProps.disabled = this.props.disabled || radioGroup.disabled;
    }

    const radioButtonCls = classNames(className, {
      ['radio-button']: true,
      [`is-active`]: radioProps.checked
    })
    return (
      <label className={radioButtonCls}>
        <span>
          <input type='radio' {...radioProps} value={value} />
        </span>
        <span>
          {children}
        </span>
      </label>
    )
  }

}

RadioButton.propTypes = {
  value: PropTypes.any,
  Checked: PropTypes.bool
}

export default RadioButton
