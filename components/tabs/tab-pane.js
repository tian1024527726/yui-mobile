import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class TabPane extends React.Component {
  static displayName = 'TabPane';

  constructor(props){
    super(props);
  }

  render(){
    const {
      tab, className, ...restProps
    } = this.props;

    const tabPaneCls = classNames('tab-panel',className);

    return (
      <div className={tabPaneCls} {...restProps} />
    )
  }
}

TabPane.propTypes = {
  tab: PropTypes.oneOfType([PropTypes.string,PropTypes.node]),
}


export default TabPane
