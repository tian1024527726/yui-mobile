import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Mask from '../mask';

class Popup extends React.Component{
  static displayName = 'Popup';

  static defaultProps = {
    visible: false,
    mask: true,
    direction: 'bottom',
    autoClose: false,
    stayTime: 3000,
    animationDuration: 300,
    maskType: 'normal'
  }

  constructor(props){
    super(props);

    this.state = {
      isShow: props.visible || false,
      isMaskShow: props.visible || false
    }
  }
  renderMask(){
    const { mask, maskType, onMaskClick, animationDuration } = this.props;
    const { visible } = this.props;

    const maskCls = classNames({
      [`popup-mask-fade-enter`]: true,
    });

    const maskStyle = {
      WebkitAnimationDuration: `${animationDuration}ms`,
      animationDuration: `${animationDuration}ms`,
    };

    return mask && (
      <Mask
        className={maskCls}
        style={maskStyle}
        visible={visible}
        type={maskType}
        onClose={onMaskClick}
      />
    );
  }

  render(){
    const {
      className, animationDuration, direction, children, ...restProps
    } = this.props;
    const { visible } = this.props;

    const popupCls = classNames('popup', className, {
      ['popup-hidden']: !visible,
    });
    const wrapCls = classNames('popup-wrapper', `popup-wrapper-${direction}`);

    const wrapStyle = {
      WebkitTransitionDuration: `${animationDuration}ms`,
      transitionDuration: `${animationDuration}ms`,
    };
    return (
      <div className={popupCls}>
        <div className={wrapCls} style={wrapStyle}>
          {children}
        </div>
        {this.renderMask()}
      </div>
    );
  }
}

Popup.propTypes = {
  visible: PropTypes.bool,
  direction: PropTypes.oneOf(['top','bottom','left','right']),
  autoClose: PropTypes.bool,
  stayTime: PropTypes.number,
  animationDuration: PropTypes.number,
  onClose: PropTypes.func,
  mask: PropTypes.bool,
  maskType: PropTypes.string,
  onMaskClick: PropTypes.func
}

export default Popup
