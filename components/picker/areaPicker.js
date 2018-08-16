import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Picker from './picker';

const getNow = () => {
  return new Date()
}

class AreaPicker extends React.Component{
  static displayName = 'AreaPicker';

  static defaultProps = {
  }
  constructor(props){
    super(props);

    this.state = {}
  }

  getData = () => {
    const {  } = this.props;

  }

  onPickerChange = (res) => {

  }


  render(){
    const { ...restProps } = this.props;
    return (
      <Picker
        { ...restProps }
        onPickerChange={this.onPickerChange}
        data={this.getData()}
      />
    )
  }
}

AreaPicker.propTypes = {
  title: PropTypes.string,
  cols: PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
  cancelBtn: PropTypes.object,
  selectedDate: PropTypes.array,
  selectedIndex: PropTypes.array,
  cancelBtn: PropTypes.object,
  confirmBtn: PropTypes.object,
  onPickerChange: PropTypes.func,
  cascader: PropTypes.bool,
  data: PropTypes.array
}

export default AreaPicker ;
