import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Modal from './modal';

class Alert extends React.Component {
  static displayName = 'Modal.Alert';

  static defaultProps = {
    prefixCls: 'ym-modal'
  }


  constructor(props) {
    super(props)
  }
  render() {
    const { visible, title, footer, transitionName, style, children, prefixCls } = this.props;

    return (
      <Modal
        style={style}
        visible={visible}
        transparent
        title={title}
        transitionName={transitionName || "ym-zoom"}
        closable={false}
        maskClosable={false}
        footer={footer}
        maskTransitionName="ym-fade"
      >
        <div className={`${prefixCls}-alert-content`}>{children}</div>
      </Modal>
    )
  }
}

Alert.propTypes = {
  visible: PropTypes.bool,
  title: PropTypes.any,
  footer: PropTypes.array,
  style: PropTypes.object,
  transitionName: PropTypes.oneOf(['ym-zoom','ym-fade'])
}

export default Alert


