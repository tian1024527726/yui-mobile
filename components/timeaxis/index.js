import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class TimeAxis extends React.Component {
  static displayName = 'TimeAxis'
  static VERTICAL = 'v'
  static HORIZONTAL = 'h'
  static defalutProps = {
    direction: TimeAxis.HORIZONTAL
  }
  constructor(props) {
    super(props);
  }
  isOdd = (num) => {
    return Boolean((num) % 2);
  }
  getPointLiCls = (num,currentStep) => {
    if(num < currentStep){
      return 'done';
    }else if(num == currentStep){
      return 'process';
    }else{
      return null;
    }
  }
  renderFlowLine(dataList) {
    const { currentStep } = this.props;
    let newDataList = dataList.concat(dataList).slice(0,-1);

    return newDataList.map((item, index) => {
      let liCls;
      if (this.isOdd(index + 1)) {
        let pointLiOrder = (index / 2 + 1);
        liCls = this.getPointLiCls(pointLiOrder,currentStep);
      }
      return (
        <li key={index} className={liCls}></li>
      )
    })
  }
  renderFlowContent(dataList) {
    const { currentStep } = this.props
    let liCls;
    return dataList.map((item,index)=>{
      let pointLiOrder = (index + 1);
      liCls = this.getPointLiCls(pointLiOrder,currentStep);
      return (
        <li className={liCls} key={index}>
          <strong>{item.text}</strong>
          <em>{item.time}</em>
        </li>
      )
    })
  }
  render() {
    const {
      direction, className, dataList, style, ...restProps
    } = this.props;

    if (!dataList) {
      return (<div className='null' />)
    }

    const flowCls = classNames('flow', className, {
      ['is-vertical']: direction == TimeAxis.VERTICAL
    })
    return (
      <div className={flowCls}>
        <ul className='flow-line'>
          {this.renderFlowLine(dataList)}
        </ul>
        <ul className='flow-content' style={style}>
          {this.renderFlowContent(dataList)}
        </ul>
      </div>
    )
  }
}

TimeAxis.propTypes = {
  direction: PropTypes.oneOf(['v', 'h']),
  dataList: PropTypes.array,
  currentStep: PropTypes.number
}

export default TimeAxis;
