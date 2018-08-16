import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class List extends React.Component {
  static displayName = 'List'

  constructor(props) {
    super(props);
  }

  renderItem = ( item, index ) => {
    return (
      <div className='list-item' key={index}>
        {React.cloneElement(item)}
      </div>
    )
  }

  render() {
    const {
      header, className, bodyClassName, children, style, ...restProps
    } = this.props;

    const listCls = classNames('list', className, {

    })
    const listBodyCls = classNames('list-body',bodyClassName,{

    })

    return (
      <div
        className={listCls}
        {...restProps}
      >
        {header && <header className='list-header'>{header}</header>}
        <div className={listBodyCls} style={style}>
          {children}
        </div>
      </div>
    )
  }
}

List.propTypes = {
  header: PropTypes.any
}

export default List
