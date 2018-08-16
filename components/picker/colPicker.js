import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import BScroll from 'better-scroll';
import isEqual from 'lodash/isEqual.js';

class ColPicker extends React.Component {
  static displayName = 'ColPicker';
  static defaultProps = {
    prefixCls: 'ym-col-picker',
    rotate: 0,
    click: true,
    tap: true,
    bounceTime: 300,
    pickerData: [],
    selectedIndex: 0
  }

  constructor(props) {
    super(props)

    this.state = {
      selectedIndex: props.selectedIndex,
      pickerData: props.pickerData,
      pickerSelectedVal: null,
      pickerSelectedText: null
    }
  }
  componentDidMount() {
    const { prefixCls, rotate, click, tap, bounceTime, onChange } = this.props;
    const { selectedIndex } = this.state;
    this.pickerScroll = new BScroll(this.picker, {
      wheel: {
        selectedIndex: selectedIndex,
        rotate: rotate,
        adjustTime: 400,
        wheelWrapperClass: `${prefixCls}-scroll`,
        wheelItemClass: `${prefixCls}-scroll-item`
      },
      probeType: 3,
      bounceTime: bounceTime,
      click: click,
      tap: tap
    })
    this.pickerScroll.on('scrollEnd', (e) => {
      /*滚动中主动点击picker也会触发scrollEnd函数*/
      if (!this.pickerScroll.stopFromTransition) {
        this.setState({
          selectedIndex: this.pickerScroll.selectedIndex,
        }, () => {
          const selectedIndex = this.pickerScroll.selectedIndex;
          const selectedData = this.state.pickerData[selectedIndex];

          onChange && onChange({
            selectedIndex,
            selectedData
          });
        })
      }
    })

    this.pickerScroll.on('scrollCancel', (e) => {
      //处理点击colpicker外的元素,导致无法复位的问题
      if(this.pickerScroll.absStartY < this.pickerScroll.maxScrollY){
        this.pickerScroll.scrollTo(0,this.pickerScroll.maxScrollY,400,true,true,'cubic-bezier(0.23, 1, 0.32, 1)')
      } else if (this.pickerScroll.absStartY > 0){
        this.pickerScroll.scrollTo(0,0,400,true,true,'cubic-bezier(0.23, 1, 0.32, 1)')
      }
    })

  }

  shouldComponentUpdate(nextProps){
    if(isEqual(this.props.pickerData,nextProps.pickerData) && isEqual(this.props.selectedIndex,nextProps.selectedIndex)){
      return false;
    }
    return true;
  }

  componentWillReceiveProps(nextProps) {

    if ('pickerData' in nextProps) {
      this.setState({
        pickerData: nextProps.pickerData,
        selectedIndex: nextProps.selectedIndex,
      }, () => {
        if(this.pickerScroll){
          this.pickerScroll.refresh();
          this.pickerScroll.wheelTo(nextProps.selectedIndex);
        }
      })
    }
  }
  render() {
    const {
      prefixCls, rotate, click, tap, bounceTime, ...restProps
    } = this.props;

    const {
      selectedIndex, pickerData
    } = this.state;

    const pickerWrapperCls = classNames(`${prefixCls}`);
    const pickerScrollCls = classNames(`${prefixCls}-scroll`);

    return (
      <div className={`${prefixCls}-content`}>
        <div className={`${prefixCls}-mask-top`}></div>
        <div className={`${prefixCls}-mask-bottom`}></div>
        <div ref={(node) => this.picker = node} className={pickerWrapperCls}>
          <ul className={pickerScrollCls}>
            {pickerData.map((item, index) => {
              const pickerScrollItemCls = classNames(`${prefixCls}-scroll-item`, {
                ['is-active']: index == selectedIndex
              });
              return (
                <li className={pickerScrollItemCls} key={index}>{item.value || item}</li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}

ColPicker.propTypes = {
  prefixCls: PropTypes.string,
  rotate: PropTypes.number,
  click: PropTypes.bool,
  tap: PropTypes.bool,
  bounceTime: PropTypes.number,
  pickerData: PropTypes.array,
  selectedIndex: PropTypes.number,
  onChange: PropTypes.func
}

export default ColPicker
