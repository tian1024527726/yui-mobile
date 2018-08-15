import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class Tabs extends React.Component {
  static displayName = 'Tabs';

  constructor(props) {
    super(props);

    this.state = {
      activeKey: props.defaultActiveKey || props.activeKey || '1',
    }
  }
  componentWillReceiveProps(nextProps) {
    if ('activeKey' in nextProps) {
      this.setState({
        activeKey: nextProps.activeKey
      })
    }
  }

  handleClick = (key) => {
    this.handleChange(key);
    if ('activeKey' in this.props) {
      this.setState({
        activeKey: this.props.activeKey
      })
    } else {
      this.setState({
        activeKey: key
      })
    }
  }

  handleChange = (key) => {
    const { onChange } = this.props;
    const lastKey = this.state.activeKey;
    if (onChange && lastKey != key) {
      onChange(key);
    }
  }

  renderTabList = () => {
    const { children, type, activeColor } = this.props;
    let underLineStyle = null;
    if (type == 'underline') {
      const widthPercent = 100 / children.length;
      let tabIndex;
      children.map((item, index) => {
        if (item.key == this.state.activeKey) {
          tabIndex = index;
        }
      })
      underLineStyle = {
        width: `${widthPercent}%`,
        left: `${widthPercent * tabIndex}%`
      }
    }

    const tabListCls = classNames({
      [`tab-list`]: !activeColor,
      [`tab-list-primary-${activeColor}`]: activeColor
    })
    return (
      <div className={tabListCls}>
        <ul>
          {children.map((item, index) => {
            const liCls = classNames({
              [`is-active`]: this.state.activeKey == item.key
            })
            return (
              <li key={index} className={liCls} onClick={() => { this.handleClick(item.key) }}>
                {item.props.tab}
              </li>
            )
          })}
        </ul>
        {type == 'underline' ? <div className='tabs-default-bar-underline' style={underLineStyle}></div> : null}
      </div>
    );
  }

  renderTabContent = () => {
    const { children } = this.props;
    return (
      <div className='tab-content'>
        {children.map((item, index) => {
          const paneCls = classNames('tab-pane', {
            [`is-active`]: this.state.activeKey == item.key
          })
          return (
            <div className={paneCls} key={index}>
              {item}
            </div>
          )
        })}
      </div>
    );
  }

  render() {
    const {
      className, type, onChange, activeKey, activeColor, defaultActiveKey, ...restProps
    } = this.props;

    const tabCls = classNames(className, {
      ['tabs']: type ? false : true,
      [`tabs-${type}`]: type,
    });
    return (
      <div className={tabCls} {...restProps}>
        {this.renderTabList()}
        {this.renderTabContent()}
      </div>
    )
  }
}

Tabs.propTypes = {
  activekey: PropTypes.string,
  defaultActiveKey: PropTypes.string,
  type: PropTypes.oneOf(['normal', 'filled', 'underline']),
  activeColor: PropTypes.oneOf(['blue', 'oringe', 'yellow', 'purple', 'green']),
  onChange: PropTypes.func
}


export default Tabs
