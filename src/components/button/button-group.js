import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const ButtonGroup = (props) => {
  const { className, ...restProps } = props;

  const ButtonGroupCls = classNames(className);

  return <div {...restProps} className={ButtonGroupCls} />;
};

ButtonGroup.propTypes = {
  className: PropTypes.string
}

export default ButtonGroup;
