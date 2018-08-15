import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import TouchFeedback from 'rmc-feedback';

const ListItem = (props) => {
  const { className, renderItem, style, children, onClick, disabled, ...restProps } = props;

  const ListItemCls = classNames('list-item', className, {
  });

  const activeClassName = classNames({
    ['list-item-active']: !disabled && onClick
  })
  return (
    <TouchFeedback activeClassName={activeClassName}>
      <div
        {...restProps}
        className={ListItemCls}
        style={style}
        onClick={onClick}
      >
        {React.cloneElement(renderItem, {})}
        {children}
      </div>
    </TouchFeedback>
  )
};

ListItem.propTypes = {
  className: PropTypes.string,
  renderItem: PropTypes.node,
  rules: PropTypes.array,
  onClick: PropTypes.func,
  disabled: PropTypes.bool
}

export default ListItem;
