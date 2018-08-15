import React from 'react';
import classNames from 'classnames';
import Notification from 'rmc-notification';

const prefixCls = 'ym-toast';
let messageInstance = null;

const getMessageInstance = (mask, callback) => {
  if (messageInstance) {
    messageInstance.destroy();
    messageInstance = null;
  };

  Notification.newInstance(
    {
      prefixCls,
      style: {},
      transitionName: 'ym-fade',
      className: classNames({
        [`${prefixCls}-mask`]: mask,
        [`${prefixCls}-nomask`]: !mask,
      }),
    },
    (notification) => callback && callback(notification),
  )
}

class Toast {
  static displayName = 'Toast'

  static show(content, duration = 2, onClose = () => { }, mask = true) {
    if (!content) return;

    getMessageInstance(mask, notification => {
      messageInstance = notification;
      notification.notice({
        duration: duration,
        content: <div className='toast-content'>{content}</div>,
        closable: false,
        onClose() {
          if (onClose) {
            onClose();
          }
          notification.destroy();
          notification = null;
          messageInstance = null;
        }
      });
    })
  }

  static loading(content,duration = 1000, onClose = () => { }, mask = true){
    getMessageInstance(mask, notification => {
      messageInstance = notification;
      notification.notice({
        duration: duration,
        content: content,
        closable: false,
        onClose() {
          if (onClose) {
            onClose();
          }
          notification.destroy();
          notification = null;
          messageInstance = null;
        }
      });
    })
  }

  static hide() {
    if (messageInstance) {
      messageInstance.destroy();
      messageInstance = null;
    }
  }
}


export default Toast
