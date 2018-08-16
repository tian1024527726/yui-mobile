import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import TouchFeedback from 'rmc-feedback';
import Icon from '../icon';

class Cell extends React.Component {
  static displayName = 'Cell'

  constructor(props) {
    super(props);
  }

  handerClick = (e) => {
    const { onClick } = this.props;
    onClick && onClick(e);
    if (onClick) {
      onClick(e);
    }
  }

  renderLeft = (title, prefixIcon) => {
    if (title || prefixIcon) {
      return (
        <div className={'cell-left'}>{title}{prefixIcon}</div>
      )
    }
  }
  renderCenter = (description) => {
    return (
      <div className={'cell-center'}>{description}</div>
    )
  }
  renderRight = (subTitle, suffixIcon) => {
    const { hasArrow } = this.props;
    if (hasArrow) {
      suffixIcon = <Icon type='arrow-right' size='s' style={{color: '#C7C7CC' }} />;
    }
    if (subTitle || suffixIcon) {
      return (
        <div className={'cell-right'}>{subTitle}{suffixIcon}</div>
      )
    }
  }
  render() {
    const {
      prefixIcon, suffixIcon, title, subTitle, type, className, hasArrow, bordered, disabled, description, children, onClick, ...restProps
    } = this.props;

    let typeCls = '';
    switch (type) {
      case 'primary':
        typeCls = 'header';
        break;
      case 'secondary':
        typeCls = 'body';
        break;
      default:
        typeCls = 'header';
        break;
    }
    const cellCls = classNames('cell', className,{
      [`cell-${typeCls}`]: typeCls,
      ['is-bordered']: bordered
    })

    const activeClassName = classNames({
      ['cell-active']: !disabled && onClick
    })

    const ComponentProp = this.props.href ? 'a' : 'div';
    return (
      <TouchFeedback activeClassName={activeClassName}>
        <ComponentProp
          {...restProps}
          className={cellCls}
          onClick={this.handerClick}
        > {children}
          {(title || prefixIcon) && this.renderLeft(title, prefixIcon)}
          {description && this.renderCenter(description)}
          {(subTitle || suffixIcon || hasArrow) && this.renderRight(subTitle, suffixIcon)}
        </ComponentProp>
      </TouchFeedback>
    )
  }
}

Cell.propTypes = {
  prefixIcon: PropTypes.node,
  suffixIcon: PropTypes.node,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  subTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  type: PropTypes.oneOf(['primary', 'secondary']),
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  className: PropTypes.string,
  hasArrow: PropTypes.bool,
  bordered: PropTypes.bool,
  onClick: PropTypes.func,
  disabled: PropTypes.func,
}

export default Cell
