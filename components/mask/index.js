import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class Mask extends React.Component {
  static displayName = 'Mask'

  constructor(props){
    super(props);
  }

  render(){
    const {
      className, visible, type, onClose, ...restProps
    } = this.props;

    const markCls = classNames('mask', className, {
      ['is-active']:true,
      ['transparent']:type == 'transparent',
    });

    return visible && <div ref='mask' className={markCls} onClick={onClose} {...restProps} />;
  }
}

Mask.propTypes = {
  type: PropTypes.oneOf(['normal','transparent']),
  visible: PropTypes.bool,
  onClose: PropTypes.func
}


export default Mask;
