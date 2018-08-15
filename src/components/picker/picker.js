import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import TouchFeedback from 'rmc-feedback';
import ColPicker from './colPicker';
import Modal from '../modal';
import isEqual from 'lodash/isEqual.js';

const isEmptyObject = (obj) => {
  return JSON.stringify(obj) == '{}'
}

const isEmptyArray = (array) => {
  return JSON.stringify(array) == '[]'
}

class Picker extends React.Component {
  static displayName = 'Picker';

  static defaultProps = {
    prefixCls: 'ym-picker',
    data: [],
    title: '',
    // selectedIndex: [],
    cancelBtn: {},
    confirmBtn: {},
    cascader: false,
    onPickerChange: () => { }
  }

  constructor(props) {
    super(props);
    const selectedIndex = props.defaultSelectedIndex || props.selectedIndex;
    let realSelectedIndex = [], realSelectedData = [];

    if (!selectedIndex || isEmptyArray(selectedIndex)) {
      realSelectedIndex = props.data.map((item, index) => {
        return 0
      })
    } else {
      realSelectedIndex = selectedIndex
    }

    realSelectedData = props.data.map((item, index) => {
      return props.data[index][realSelectedIndex[index]]
    })


    this.state = {
      visible: false,
      data: props.data,
      selectedData: realSelectedData,
      selectedIndex: realSelectedIndex,
      curSelectedData: realSelectedData,
      curSelectedIndex: realSelectedIndex
    }
  }

  show = () => {
    this.setState({ visible: true });
  }

  hide = () => {
    this.setState({ visible: false });
  }

  colPickerOnChange = (res, index) => {
    const { selectedData, selectedIndex } = this.state;
    const { onPickerChange } = this.props;

    const newSelectedData = [...selectedData];
    newSelectedData[index] = res.selectedData
    const newSelectedIndex = [...selectedIndex];
    newSelectedIndex[index] = res.selectedIndex;

    this.setState({
      curSelectedData: newSelectedData,
      curSelectedIndex: newSelectedIndex,
      selectedData: newSelectedData,
      selectedIndex: newSelectedIndex
    }, () => {
      onPickerChange && onPickerChange({
        selectedIndex: newSelectedIndex,
        selectedData: newSelectedData,
        colIndex: index,
        colVal: res.selectedData
      });
    })
  }

  getColPickers = (options) => {
    const { selectedIndex, defaultSelectedIndex } = this.state;
    return options.map((item, index) => {
      return (
        <ColPicker
          key={index}
          selectedIndex={selectedIndex[index]}
          pickerData={item}
          onChange={(res) => this.colPickerOnChange(res, index)}
        />
      )
    })
  }

  handleCancelClick = (fn) => {
    const { selectedData, selectedIndex } = this.state;
    this.setState({ visible: false });
    fn && fn()
  }

  handleConfirmClick = (fn) => {
    const { curSelectedData, curSelectedIndex } = this.state;
    this.setState({ visible: false });
    fn && fn({ selectedData: curSelectedData, selectedIndex: curSelectedIndex })
  }

  renderHeader = () => {
    const { prefixCls, title, cancelBtn, confirmBtn } = this.props;
    if (!title && isEmptyObject(cancelBtn) && isEmptyObject(confirmBtn)) {
      return null;
    }
    return (
      <div className={`${prefixCls}-header`}>
        <TouchFeedback activeClassName={`${prefixCls}-header-button-active`}>
          <div className={`${prefixCls}-header-cancelBtn`} onClick={() => this.handleCancelClick(cancelBtn.onPress)} >{cancelBtn.text}</div>
        </TouchFeedback>
        <div className={`${prefixCls}-header-title`}>{title}</div>
        <TouchFeedback activeClassName={`${prefixCls}-header-button-active`}>
          <div className={`${prefixCls}-header-confirmBtn`} onClick={() => this.handleConfirmClick(confirmBtn.onPress)} >{confirmBtn.text}</div>
        </TouchFeedback>
      </div>
    )
  }

  componentWillReceiveProps(nextProps) {
    if('selectedIndex' in nextProps || !isEqual(this.props.data,nextProps.data)){

      const { selectedIndex } = nextProps;
      let realSelectedIndex = [], realSelectedData = [];
      if (!selectedIndex || isEmptyArray(selectedIndex)) {
        realSelectedIndex = this.props.data.map((item, index) => {
          return 0
        })
      } else {
        realSelectedIndex = selectedIndex
      }

      realSelectedData = nextProps.data.map((item, index) => {
        return nextProps.data[index][realSelectedIndex[index]]
      })


      this.setState({
        data: nextProps.data,
        selectedData: realSelectedData,
        selectedIndex: realSelectedIndex,
        curSelectedData: realSelectedData,
        curSelectedIndex: realSelectedIndex
      })
    }
  }

  componentWillUnmount() { }

  render() {
    const {
      prefixCls, onClose, title, cancelBtn, confirmBtn, children, ...restProps
    } = this.props;
    const { data, selectedIndex, selectedData, visible } = this.state;

    const modalWrapper = <Modal
      visible={visible}
      popup
      mask={true}
      animationType='slide-up'
      onClose={onClose}
    >
      {this.renderHeader()}
      <div className={`${prefixCls}-content`}>
        {this.getColPickers(data)}
      </div>
    </Modal>
    return (
      children &&
      typeof children !== 'string' &&
      React.isValidElement(children) &&
      <div>{children}{modalWrapper}</div>
    )
  }
}

Picker.propTypes = {
  title: PropTypes.string,
  cols: PropTypes.number,
  cancelBtn: PropTypes.object,
  defaultSelectedIndex: PropTypes.array,
  selectedIndex: PropTypes.array,
  cancelBtn: PropTypes.object,
  confirmBtn: PropTypes.object,
  onClose: PropTypes.func,
  onPickerChange: PropTypes.func,
  cascader: PropTypes.bool,
  data: PropTypes.array
}

export default Picker;
