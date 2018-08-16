import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Picker from './picker';

const getNow = _ => new Date();

const isLeapYear = year => (year % 4 == 0) && (year % 100 != 0 || year % 400 == 0);

const getDays = (year, month) => {
  let maxDay;
  if (isLeapYear(year)) {
    if (month == 2) {
      maxDay = 29;
    } else if ([1, 3, 5, 7, 8, 10, 12].indexOf(month) != -1) {
      maxDay = 31;
    } else {
      maxDay = 30;
    }
  } else {
    if (month == 2) {
      maxDay = 28;
    } else if ([1, 3, 5, 7, 8, 10, 12].indexOf(month) != -1) {
      maxDay = 31;
    } else {
      maxDay = 30;
    }
  }
  return maxDay;
};

const fillZero = n => n < 10 ? '0' + n : '' + n;

const MINDATE = `${getNow().getFullYear() - 20}/01/01 00:00`;
const MAXDATE = `${getNow().getFullYear() + 10}/01/01 00:00`;

class DatePicker extends React.Component {
  static displayName = 'DatePicker';

  static defaultProps = {
    minDate: MINDATE,
    maxDate: MAXDATE,
    confirmBtn: {},
    cancelBtn: {},
    currentDate: getNow()
  }
  constructor(props) {
    super(props);

    const { minDate, maxDate, currentDate } = props;

    const minDateObj = Boolean(+new Date(minDate)) ? new Date(minDate) : new Date(MINDATE);
    const maxDateObj = Boolean(+new Date(maxDate)) ? new Date(maxDate) : new Date(MAXDATE);
    const currentDateObj = Boolean(+new Date(currentDate)) ? new Date(currentDate) : new Date();

    let years = [], months = [], dates = [], hours = [], minutes = [];
    let curyear = currentDateObj.getFullYear(),
      curmonth = currentDateObj.getMonth() + 1,
      curdate = currentDateObj.getDate(),
      curhour = currentDateObj.getHours(),
      curminute = currentDateObj.getMinutes();
    let selectedData = [], selectedIndex = [];
    /*处理 年*/
    for (let i = minDateObj.getFullYear(); i <= maxDateObj.getFullYear(); i++) {
      years.push(i);
    }
    /*处理 月*/
    if (curyear == maxDateObj.getFullYear()) {
      for (let i = 1; i <= maxDateObj.getMonth() + 1; i++) {
        months.push(i);
      }
    } else if (curyear == minDateObj.getFullYear()) {
      for (let i = minDateObj.getMonth() + 1; i <= 12; i++) {
        months.push(i);
      }
    } else {
      for (let i = 1; i <= 12; i++) {
        months.push(i);
      }
    }
    /*处理 日*/
    const maxDateDay = maxDateObj.getDate();
    const minDateDay = minDateObj.getDate();
    const maxDay = getDays(curyear, curmonth);
    if (curyear == maxDateObj.getFullYear() && curmonth == maxDateObj.getMonth() + 1) {
      for (let i = 1; i <= maxDateDay; i++) {
        dates.push(i);
      }
    } else if (curyear == minDateObj.getFullYear() && curmonth == minDateObj.getMonth() + 1) {
      for (let i = minDateDay; i <= maxDay; i++) {
        dates.push(i);
      }
    } else {
      for (let i = 1; i <= maxDay; i++) {
        dates.push(i);
      }
    }
    /*处理 时*/
    for (let i = 0; i <= 23; i++) {
      hours.push(i);
    }
    /*处理 分*/
    for (let i = 0; i <= 59; i++) {
      minutes.push(i);
    }
    /*处理currentDate大于maxDate或小于minDate时,取最接近的值 */
    let yIndex, MIndex, dIndex, hIndex, mIndex;
    if (+new Date(currentDateObj) < +new Date(minDateObj)) {
      yIndex = MIndex = dIndex = hIndex = mIndex = 0;
    } else if (+new Date(currentDateObj) > +new Date(maxDateObj)) {
      yIndex = years.length - 1;
      MIndex = months.length - 1;
      dIndex = dates.length - 1;
      hIndex = hours.length - 1;
      mIndex = minutes.length - 1;
    } else {
      yIndex = years.indexOf(curyear);
      MIndex = months.indexOf(curmonth);
      dIndex = dates.indexOf(curdate);
      hIndex = hours.indexOf(curhour);
      mIndex = minutes.indexOf(curminute);
    }

    selectedIndex = this.getDataFromMode(yIndex, MIndex, dIndex, hIndex, mIndex);

    years = years.map(item => `${item}年`)
    months = months.map(item => `${item}月`)
    dates = dates.map(item => `${item}日`)
    hours = hours.map(item => `${item}时`)
    minutes = minutes.map(item => `${item}分`)

    selectedData = this.getDataFromMode(years[yIndex], months[MIndex], dates[dIndex], hours[hIndex], minutes[mIndex]);

    this.state = {
      years,
      months,
      dates,
      hours,
      minutes,
      selectedData,
      selectedIndex,
      currentDate
    }
  }

  show = () => {
    this.Picker.show();
  }

  hide = () => {
    this.Picker.hide();
  }

  setDatePickerState = (option = {}) => {

    const minDate = option.minDate || this.props.minDate;
    const maxDate = option.maxDate || this.props.maxDate;
    const currentDate = option.currentDate || this.props.currentDate;

    const minDateObj = Boolean(+new Date(minDate)) ? new Date(minDate) : new Date(MINDATE);
    const maxDateObj = Boolean(+new Date(maxDate)) ? new Date(maxDate) : new Date(MAXDATE);
    const currentDateObj = Boolean(+new Date(currentDate)) ? new Date(currentDate) : new Date();

    let years = [], months = [], dates = [], hours = [], minutes = [];
    let curyear = currentDateObj.getFullYear(),
      curmonth = currentDateObj.getMonth() + 1,
      curdate = currentDateObj.getDate(),
      curhour = currentDateObj.getHours(),
      curminute = currentDateObj.getMinutes();
    let selectedData = [], selectedIndex = [];
    /*处理 年*/
    for (let i = minDateObj.getFullYear(); i <= maxDateObj.getFullYear(); i++) {
      years.push(i);
    }
    /*处理 月*/
    if (curyear >= maxDateObj.getFullYear()) {
      for (let i = 1; i <= maxDateObj.getMonth() + 1; i++) {
        months.push(i);
      }
    } else if (curyear <= minDateObj.getFullYear()) {
      for (let i = minDateObj.getMonth() + 1; i <= 12; i++) {
        months.push(i);
      }
    } else {
      for (let i = 1; i <= 12; i++) {
        months.push(i);
      }
    }
    /*处理 日*/
    const maxDateDay = maxDateObj.getDate();
    const minDateDay = minDateObj.getDate();
    const maxDay = getDays(curyear, curmonth);
    if (curyear >= maxDateObj.getFullYear() && curmonth >= maxDateObj.getMonth() + 1) {
      for (let i = 1; i <= maxDateDay; i++) {
        dates.push(i);
      }
    } else if (curyear <= minDateObj.getFullYear() && curmonth <= minDateObj.getMonth() + 1) {
      for (let i = minDateDay; i <= maxDay; i++) {
        dates.push(i);
      }
    } else {
      for (let i = 1; i <= maxDay; i++) {
        dates.push(i);
      }
    }
    /*处理 时*/
    for (let i = 0; i <= 23; i++) {
      hours.push(i);
    }
    /*处理 分*/
    for (let i = 0; i <= 59; i++) {
      minutes.push(i);
    }
    /*处理currentDate大于maxDate或小于minDate时,取最接近的值 */
    let yIndex, MIndex, dIndex, hIndex, mIndex;
    if (+new Date(currentDateObj) < +new Date(minDateObj)) {
      yIndex = MIndex = dIndex = hIndex = mIndex = 0;
    } else if (+new Date(currentDateObj) > +new Date(maxDateObj)) {
      yIndex = years.length - 1;
      MIndex = months.length - 1;
      dIndex = dates.length - 1;
      hIndex = hours.length - 1;
      mIndex = minutes.length - 1;
    } else {
      yIndex = years.indexOf(curyear);
      MIndex = months.indexOf(curmonth);
      dIndex = dates.indexOf(curdate);
      hIndex = hours.indexOf(curhour);
      mIndex = minutes.indexOf(curminute);
    }

    selectedIndex = this.getDataFromMode(yIndex, MIndex, dIndex, hIndex, mIndex);

    years = years.map(item => `${item}年`)
    months = months.map(item => `${item}月`)
    dates = dates.map(item => `${item}日`)
    hours = hours.map(item => `${item}时`)
    minutes = minutes.map(item => `${item}分`)

    selectedData = this.getDataFromMode(years[yIndex], months[MIndex], dates[dIndex], hours[hIndex], minutes[mIndex]);

    this.setState({
      years,
      months,
      dates,
      hours,
      minutes,
      selectedData,
      selectedIndex,
      currentDate
    })
  }

  getDataFromMode = (years, months, dates, hours, minutes) => {
    const { mode } = this.props;
    let data = [];
    switch (mode) {
      case 'normal':
        data = [years, months, dates, hours, minutes];
        break;
      case 'date':
        data = [years, months, dates]
        break;
      case 'time':
        data = [hours, minutes]
        break;
      default:
        data = [years, months, dates, hours, minutes];
    }
    return data
  }

  onPickerChange = (res) => {
    const { mode, minDate, maxDate, onPickerChange } = this.props;
    const minDateObj = new Date(minDate);
    const maxDateObj = new Date(maxDate);
    let years = [], months = [], dates = [], hours = [], minutes = [];

    let currentSelectedIndex = [...res.selectedIndex];
    let currentSelectedData = [...res.selectedData];

    if (mode == 'normal' || !mode || mode == 'date') {
      if (res.colIndex == 0) {
        if (parseInt(res.colVal) >= maxDateObj.getFullYear()) {
          for (let i = 1; i <= maxDateObj.getMonth() + 1; i++) {
            months.push(`${i}月`);
          }

          if (parseInt(currentSelectedData[1]) > maxDateObj.getMonth() + 1) {
            currentSelectedIndex[1] = maxDateObj.getMonth();
            currentSelectedData[1] = `${maxDateObj.getMonth() + 1}月`
          } else {
            currentSelectedIndex[1] = months.indexOf(currentSelectedData[1]);
          }
        } else if (parseInt(res.colVal) <= minDateObj.getFullYear()) {
          for (let i = minDateObj.getMonth() + 1; i <= 12; i++) {
            months.push(`${i}月`);
          }
          if (parseInt(currentSelectedData[1]) < minDateObj.getMonth() + 1) {
            currentSelectedData[1] = `${minDateObj.getMonth() + 1}月`
            currentSelectedIndex[1] = 0;
          } else {
            currentSelectedIndex[1] = months.indexOf(currentSelectedData[1]);
          }
        } else {
          for (let i = 1; i <= 12; i++) {
            months.push(`${i}月`);
          }
        }

        const maxDateDay = maxDateObj.getDate();
        const minDateDay = minDateObj.getDate();
        const maxDay = getDays(parseInt(currentSelectedData[0]), parseInt(currentSelectedData[1]));

        if (parseInt(currentSelectedData[0]) >= maxDateObj.getFullYear() && parseInt(currentSelectedData[1]) >= maxDateObj.getMonth() + 1) {
          for (let i = 1; i <= maxDateDay; i++) {
            dates.push(`${i}日`);
          }
          if (parseInt(currentSelectedData[2]) >= maxDateDay) {
            currentSelectedIndex[2] = maxDateDay - 1;
            currentSelectedData[2] = `${maxDateDay}日`;
          } else {
            currentSelectedIndex[2] = dates.indexOf(currentSelectedData[2]);
          }
        } else if (parseInt(currentSelectedData[0]) <= minDateObj.getFullYear() && parseInt(currentSelectedData[1]) <= minDateObj.getMonth() + 1) {
          for (let i = minDateDay; i <= maxDay; i++) {
            dates.push(`${i}日`);
          }
          if (parseInt(currentSelectedData[2]) < minDateDay) {
            currentSelectedData[2] = `${minDateDay}日`;
            currentSelectedIndex[2] = 0;
          } else if (parseInt(currentSelectedData[2]) > maxDay) {
            currentSelectedData[2] = `${maxDay}日`;
            currentSelectedIndex[2] = dates.indexOf(`${maxDay}日`);
          } else {
            currentSelectedIndex[2] = dates.indexOf(currentSelectedData[2]);
          }
        } else {
          for (let i = 1; i <= maxDay; i++) {
            dates.push(`${i}日`);
          }
          if (parseInt(currentSelectedData[2]) > maxDay) {
            currentSelectedData[2] = `${maxDay}日`;
            currentSelectedIndex[2] = maxDay - 1;
          } else {
            currentSelectedIndex[2] = dates.indexOf(currentSelectedData[2]);
          }
        }

        this.setState({
          months,
          dates
        })
      } else if (res.colIndex == 1) {
        const maxDateDay = maxDateObj.getDate();
        const minDateDay = minDateObj.getDate();
        const maxDay = getDays(parseInt(currentSelectedData[0]), parseInt(currentSelectedData[1]));

        if (parseInt(currentSelectedData[0]) >= maxDateObj.getFullYear() && parseInt(currentSelectedData[1]) >= maxDateObj.getMonth() + 1) {
          for (let i = 1; i <= maxDateDay; i++) {
            dates.push(`${i}日`);
          }
          if (currentSelectedIndex[2] > maxDateDay) {
            currentSelectedIndex[2] = maxDateDay - 1;
            currentSelectedData[2] = `${maxDateDay}日`;
          } else {
            currentSelectedIndex[2] = dates.indexOf(currentSelectedData[2]);
          }
        } else if (parseInt(currentSelectedData[0]) <= minDateObj.getFullYear() && parseInt(currentSelectedData[1]) <= minDateObj.getMonth() + 1) {
          for (let i = minDateDay; i <= maxDay; i++) {
            dates.push(`${i}日`);
          }
          if (parseInt(currentSelectedData[2]) < minDateDay) {
            currentSelectedData[2] = `${minDateDay}日`;
            currentSelectedIndex[2] = 0;
          } else if (parseInt(currentSelectedData[2]) > maxDay) {
            currentSelectedData[2] = `${maxDay}日`;
            currentSelectedIndex[2] = dates.indexOf(`${maxDay}日`);
          } else {
            currentSelectedIndex[2] = dates.indexOf(currentSelectedData[2]);
          }
        } else {
          for (let i = 1; i <= maxDay; i++) {
            dates.push(`${i}日`);
          }
          if (currentSelectedIndex[2] > maxDay - 1) {
            currentSelectedIndex[2] = maxDay - 1;
            currentSelectedData[2] = `${maxDay}日`;
          } else {
            currentSelectedIndex[2] = dates.indexOf(currentSelectedData[2]);
          }
        }

        this.setState({
          dates
        })
      }
    }

    let time = '';
    switch (mode) {
      case 'normal':
        time = new Date(`${parseInt(currentSelectedData[0])}/${parseInt(currentSelectedData[1])}/${parseInt(currentSelectedData[2])} ${parseInt(currentSelectedData[3])}:${parseInt(currentSelectedData[4])}`);
        break;
      case 'date':
        time = new Date(`${parseInt(currentSelectedData[0])}/${parseInt(currentSelectedData[1])}/${parseInt(currentSelectedData[2])}`);
        break;
      case 'time':
        time = new Date(`${getNow().getFullYear()}/${getNow().getMonth() + 1}/${getNow().getDate()} ${parseInt(currentSelectedData[0])}:${parseInt(currentSelectedData[1])}`);
        break;
      default:
        time = new Date(`${parseInt(currentSelectedData[0])}/${parseInt(currentSelectedData[1])}/${parseInt(currentSelectedData[2])} ${parseInt(currentSelectedData[3])}:${parseInt(currentSelectedData[4])}`);
        break;
    }

    this.setState({
      selectedIndex: currentSelectedIndex,
      selectedData: currentSelectedData,
      currentDate: time
    })

    onPickerChange && onPickerChange({ ...res, selectedData: currentSelectedData, selectedIndex: currentSelectedIndex, currentDate: time })
  }

  handleCancelBtn = () => {
    const { cancelBtn } = this.props;
    const onPressFn = () => {
      cancelBtn.onPress()
    }
    return {
      text: cancelBtn.text,
      onPress: onPressFn
    };
  }

  handleConfirmBtn = (res) => {
    const { confirmBtn, mode, formate } = this.props;
    const { selectedIndex, selectedData } = this.state;

    const onPressFn = (res) => {
      let time, value = '';
      switch (mode) {
        case 'normal':
          time = new Date(`${parseInt(selectedData[0])}/${parseInt(selectedData[1])}/${parseInt(selectedData[2])} ${parseInt(selectedData[3])}:${parseInt(selectedData[4])}`);
          break;
        case 'date':
          time = new Date(`${parseInt(selectedData[0])}/${parseInt(selectedData[1])}/${parseInt(selectedData[2])}`);
          break;
        case 'time':
          time = new Date(`${getNow().getFullYear()}/${getNow().getMonth() + 1}/${getNow().getDate()} ${parseInt(selectedData[0])}:${parseInt(selectedData[1])}`);
          break;
        default:
          time = new Date(`${parseInt(selectedData[0])}/${parseInt(selectedData[1])}/${parseInt(selectedData[2])} ${parseInt(selectedData[3])}:${parseInt(selectedData[4])}`);
          break;
      }
      /*value 默认处理*/
      selectedData.map(item => value = value + item);
      switch (formate) {
        case 'yyyy-MM-DD HH:mm':
          if (mode == 'normal' || !mode) {
            value = `${parseInt(selectedData[0])}-${fillZero(parseInt(selectedData[1]))}-${fillZero(parseInt(selectedData[2]))} ${fillZero(parseInt(selectedData[3]))}:${fillZero(parseInt(selectedData[4]))}`
          }
          break;
        case 'yyyy-MM-DD':
          if (mode == 'date') {
            value = `${parseInt(selectedData[0])}-${fillZero(parseInt(selectedData[1]))}-${fillZero(parseInt(selectedData[2]))}`
          }
          break;
        case 'HH:mm':
          if (mode == 'time') {
            value = `${fillZero(parseInt(selectedData[0]))}:${fillZero(parseInt(selectedData[1]))}`
          }
          break;
        default:
          break;
      }
      confirmBtn.onPress({ ...res, time, value })
    }

    return {
      text: confirmBtn.text,
      onPress: onPressFn
    }
  }

  componentWillReceiveProps(nextProps) { }

  render() {
    const { ...restProps } = this.props;
    const { years, months, dates, hours, minutes, selectedData, selectedIndex } = this.state;
    return (
      <Picker
        { ...restProps }
        ref={node => this.Picker = node}
        selectedData={selectedData}
        selectedIndex={selectedIndex}
        onPickerChange={this.onPickerChange}
        cancelBtn={this.handleCancelBtn()}
        confirmBtn={this.handleConfirmBtn()}
        data={this.getDataFromMode(years, months, dates, hours, minutes)}
      />
    )
  }
}

DatePicker.propTypes = {
  title: PropTypes.string,
  cols: PropTypes.number,
  onClose: PropTypes.func,
  cancelBtn: PropTypes.object,
  confirmBtn: PropTypes.object,
  onPickerChange: PropTypes.func,
  cascader: PropTypes.bool,
  minDate: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  maxDate: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  mode: PropTypes.oneOf(['normal', 'date', 'time']),
  currentDate: PropTypes.object,
  formate: PropTypes.oneOf(['yyyy-MM-DD HH:mm', 'yyyy-MM-DD', 'HH:mm'])
}

export default DatePicker;
