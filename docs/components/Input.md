# 文本框 Input

[demo页面](https://yyb323.com/yui.mobile/#/input)

### 引入

```js
import { Input } from 'yzt-rui';
```

### 代码演示

#### 基本用法

###### 带边框的输入框
```jsx
<Input bordered addonBefore='姓名' value='啦啦啦' onBlur={() => { console.log(1212) }}></Input>
```

###### 带箭头不可编辑的输入框
```jsx
import { Input, Icon } from 'yzt-rui'

<Input addonBefore='姓名' placeholder='hello' value='啦啦啦' readOnly suffix={<Icon type='arrow-right' />} onFocus={(e) => { console.log(e.target) }} />
```


#### 可控Input输入框

```jsx
class InputDemo extends react.Component{
  constructor(props){
    super(props)
    this.state = {
      value: ''
    }
  }
  render(){
    const { value } = this.state;
    return (
      <Input
        ref={node => this.ageInput = node}
        addonBefore='年龄'
        placeholder='hello'
        value={value}
        showClean={true}
        onClean={() => { }}
        onBlur={(val, res) => { console.log(val, res) }}
        onChange={(val) => { console.log(val);this.setState({value:val}) }}
        onFocus={() => { console.log(1) }}
        rule={{ regExp: /^\d+$/, msg: '请输入正确的年龄', emptymsg: '请输入年龄' }}
      />
    )
  }
}

ReactDom(<InputDemo/>,mountNode)
```

#### Input.Number使用场景

##### 配合keyBoard组件一起使用
```jsx
import React from 'react'
import { Input, Icon, Popup, KeyBoard } from 'yzt-rui'
const InputNumber = Input.Number

class InputDemo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      canConfirm: false,
      value: '',
      visible: false,
      showCursor: false,
    }
  }
  render() {
    const { value, showCursor } = this.state
    return (
      <div style={{ marginBottom: '18rem' }}>
        <InputNumber
          addonBefore='数字'
          value={value}
          showClean={true}
          bordered
          showCursor={showCursor}
          suffix={<Icon type='arrow-right' />}
          onClick={() => this.setState({ visible: true, showCursor: true })}
          onClean={() => { this.setState({ value: '' }) }}
        />
        <Popup
          mask={false}
          visible={this.state.visible}
        >
          <KeyBoard
            type='numberWithConfirmClose'
            onKeyClick={(key) => {
              if (key == 'confirm' || key == 'close') {
                this.setState({ visible: false });
                return;
              };
              if(key == 'delete'){
                key = this.state.value.slice(0,-1);
              }else{
                key = this.state.value + key;
              }
              this.setState({ value: key, canConfirm: true })
            }}
          />
        </Popup>
      </div>
    )
  }
}

ReactDom(<InputDemo/>,mountNode)
```

##### 配合Picker组件一起使用
```jsx
import React from 'react'
import { Input, Icon, Popup, KeyBoard } from 'yzt-rui'
const InputNumber = Input.Number

class InputDemo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      timevalue: '2018年6月1日',
      timeSelectedIndex: [0, 0, 0, 0, 0],
      currentDate: new Date('2018/6/1')
    }
  }
  render() {
    const { timevalue, currentDate } = this.state
    return (
      <div style={{ marginBottom: '18rem' }}>
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
          <InputNumber
            name='birthday'
            addonBefore='出生日期'
            value={timevalue}
            suffix={<Icon type='arrow-right' size='s' />}
            onClick={() => { this.datePicker.show(); }}
          />
        </Picker>
      </div>
    )
  }
}

ReactDom(<InputDemo/>,mountNode)
```

### API

#### Input

| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |
| :--- | :--- | :--- | :--- | :--- |
| className | string | - | - | 追加类名 |
| type | string | `text` | - | 显示类型 |
| bordered | boolean | - | - | 是否显示边框 |
| showClean | boolean | - | - | 是否显示清除icon,必须配合value一起使用,非可控组件此参数没用 |
| showWarning | boolean | - | - | 是否显示输入错误icon |
| defaultValue | string | - | any | 初始值 |
| value | string | - | any | 可控组件的初始值 |
| addonBefore | string &#124; ReactNode | - | - | 输入框前面添加元素 |
| addonAfter | string &#124; ReactNode | - | - | 输入框后面添加元素 |
| prefix | ReactNode | - | - | 输入框后面添加icon |
| suffix | ReactNode | - | - | 输入框后面添加icon |
| rule | object | - | \{regExp: RegExp, msg: string, emptymsg: string\} | 输入框的校验规则 |
| onFocus | <code>(e: event) => void</code> | noop | \(e: event\) | 获得焦点时触发的回调函数 |
| onBlur | <code>(status: boolean, value: string ) => void</code> | noop | \(status: boolean, value: string\) | 失去焦点时触发的回调函数 |
| onClean | <code>(e: event ) => void</code> | noop | \(e: event\) | 点击清除icon时触发的函数 |
| onChange | <code>(value: string) => void</code> | noop | \(value: string\) | 值变化时触发的回调函数 |

#### Input.Number

| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |
| :--- | :--- | :--- | :--- | :--- |
| className | string | - | - | 追加类名 |
| showCursor | boolean | - | - | 是否显示闪烁光标 |

