import React from 'react'
import Header from '@site/layouts/AppHeader'
import { Title, Picker, Button, Input, Icon, List } from '@ui'
const InputNumber = Input.Number;
const DatePicker = Picker.DatePicker;
const ListItem = List.Item;


class PickerDemo extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      cityvalue: '中国中国',
      timevalue: '2018年6月1日',
      citySelectedIndex: [0, 1],
      timeSelectedIndex: [0, 0, 0, 0, 0],
      currentDate: new Date('2018/6/1')
    }
  }

  render() {
    const { cityvisible, cityvalue, timevalue, citySelectedIndex, timeSelectedIndex, currentDate } = this.state;
    return (
      <article>
        <Header></Header>
        <Title>Picker</Title>
        <Picker
          ref={node => this.Picker = node}
          title='地址选择'
          data={[[{value:'中国',code:1}, {value:'中国澳门',code:2}],
          [{value:'中国',code:1}, {value:'中国澳门',code:2}]]}
          //selectedIndex={citySelectedIndex}
          defaultSelectedIndex={citySelectedIndex}
          onPickerChange={(res) => { console.log(res) }}
          onClose={() => { }}
          cancelBtn={{ text: '取消', onPress: (res) => { } }}
          confirmBtn={{
            text: '确认', onPress: (res) => {
              console.log(res);
              let str = '';
              res.selectedData.map((item, index) => {
                str = str + item.value;
              })
              this.setState({ cityvalue: str })
            }
          }}
        >
          <InputNumber
            bordered
            className='cityinput'
            addonBefore='地区'
            value={cityvalue}
            suffix={<Icon type='arrow-right' size='s' />}
            onClick={() => { this.Picker.show() }}
          />
        </Picker>
        <List>
          <ListItem
            renderItem={<InputNumber
              name='birthday'
              addonBefore='出生日期'
              value={timevalue}
              suffix={<Icon type='arrow-right' size='s' />}
            />}
            onClick={() => { this.datePicker.show(); }}
          />
          <DatePicker
            ref={node => this.datePicker = node}
            title=''
            mode='date'
            formate='yyyy-MM-DD'
            minDate={new Date('2017/6/20')}
            maxDate={new Date('2018/6/22')}
            currentDate={currentDate}
            onPickerChange={(res) => { console.log(res) }}
            cancelBtn={{ text: '取消', onPress: (res) => { } }}
            confirmBtn={{
              text: '确认', onPress: (res) => {
                console.log(res);
                let str = '';
                res.selectedData.map((item, index) => {
                  str = str + item;
                })
                this.setState({ timevalue: str })
              }
            }}
          >
            <ListItem
              renderItem={<InputNumber
                name='birthday'
                addonBefore='出生日期'
                value={timevalue}
                suffix={<Icon type='arrow-right' size='s' />}
              />}
              onClick={() => { this.datePicker.show(); }}
            />
          </DatePicker>
          <ListItem
            renderItem={<InputNumber
              name='birthday'
              addonBefore='出生日期'
              value={timevalue}
              suffix={<Icon type='arrow-right' size='s' />}
            />}
            onClick={() => { this.datePicker.show(); }}
          />
        </List>

      </article>
    )
  }
}

export default PickerDemo
