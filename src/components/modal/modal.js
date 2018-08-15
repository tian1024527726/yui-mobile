import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Dialog from 'rmc-dialog';
import TouchFeedback from 'rmc-feedback';

class Modal extends React.Component {
  static displayName = 'Modal'

  constructor(props) {
    super(props);
  }
  static defaultProps = {
    prefixCls: 'ym-modal',
    transparent: false,
    popup: false,
    animationType: 'slide-up',
    animated: true,
    mask: true,
    style: {},
    onShow() { },
    footer: [],
    closable: false,
    operation: false
  }
  preventDefaultFn = (e) => {
    e.preventDefault();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.visible) {
      document.addEventListener('touchmove', this.preventDefaultFn)
    } else {
      document.removeEventListener('touchmove', this.preventDefaultFn)
    }
  }
  renderFooterButton = (button, prefixCls, i) => {
    return (
      <TouchFeedback key={i} activeClassName={`${prefixCls}-button-active`}>
        <div onClick={button.onPress} style={button.style}>{button.text}</div>
      </TouchFeedback>
    )
  }
  render() {
    const {
      prefixCls,
      className,
      wrapClassName,
      transitionName,
      mask,
      maskTransitionName,
      style,
      footer = [],
      operation,
      animated,
      transparent,
      popup,
      title,
      animationType,
      visible,
      ...restProps
    } = this.props;
    const btnGroupClass = classNames(
      `${prefixCls}-button-group-${
      footer.length === 2 && !operation ? 'h' : 'v'
      }`,
      `${prefixCls}-button-group-${operation ? 'operation' : 'normal'}`,
    );
    const footerDom = footer.length ? (
      <div className={btnGroupClass} role="group">
        {footer.map((button, i) =>
          this.renderFooterButton(button, prefixCls, i),
        )}
      </div>
    ) : null;
    let transName;
    let maskTransName;
    if (animated) {
      if (transparent) {
        transName = maskTransName = 'ym-fade';
      } else {
        transName = maskTransName = 'ym-slide-up';
      }
      if (popup) {
        transName = animationType === 'slide-up' ? 'ym-slide-up' : 'ym-slide-down';
        maskTransName = 'ym-fade';
      }
    }
    const wrapCls = classNames(wrapClassName, {
      [`${prefixCls}-wrap-popup`]: popup,
    });
    const cls = classNames(className, {
      [`${prefixCls}-transparent`]: transparent,
      [`${prefixCls}-popup`]: popup,
      [`${prefixCls}-popup-${animationType}`]: popup && animationType
    });
    return (
      <Dialog
        {...restProps}
        visible={visible}
        prefixCls={prefixCls}
        className={cls}
        wrapClassName={wrapCls}
        transitionName={transitionName || transName}
        maskTransitionName={maskTransitionName || maskTransName}
        mask={mask}
        style={style}
        title={title}
        footer={footerDom}
      />
    );
  }
}

Modal.propTypes = {
  prefixCls: PropTypes.string,
  className: PropTypes.string,
  wrapClassName: PropTypes.string,
  transitionName: PropTypes.string,
  maskTransitionName: PropTypes.string,
  mask: PropTypes.bool,
  visible: PropTypes.bool,
  style: PropTypes.object,
  footer: PropTypes.array,
  operation: PropTypes.bool,
  animated: PropTypes.bool,
  transparent: PropTypes.bool,
  popup: PropTypes.bool,
  title: PropTypes.any,
  animationType: PropTypes.oneOf(['slide-up', 'slide-down'])
}


export default Modal
