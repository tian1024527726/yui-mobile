# 日期选择器 DatePicker & DateSelect

[demo页面](https://zhongantecheng.github.io/zarm/#/datePicker)

### 引入

```js
import { DatePicker, DatePickerView, DateSelect } from 'zarm';
```

### 代码演示

#### 基本用法


###### 日期选择
```jsx
<DatePicker
  visible={this.state.visible}
  mode="date"
  value={this.state.value}
  onOk={(value) => {
    this.setState({
      visible: false,
      value,
    });
  }}
  onCancel={() => {
    this.setState({
      visible: false,
    });
  }}
  />
```

###### 时间选择
```jsx
<DatePicker
  visible={this.state.visible}
  mode="time"
  value={this.state.value}
  onOk={(value) => {
    this.setState({
      visible: false,
      value,
    });
  }}
  onCancel={() => {
    this.setState({
      visible: false,
    });
  }}
  />
```

###### 日期选择（自定义）
```jsx
<DatePicker
  visible={limitDate.visible}
  title="选择年份"
  placeholder="请选择年份"
  mode="date"
  min="2007-01-03"
  max="2019-11-23"
  value={limitDate.value}
  onOk={(value) => {
    this.setState({
      limitDate: {
        visible: false,
        value,
      },
    });
    Toast.show(format.date(value, 'yyyy年MM月dd日'));
  }}
  onCancel={() => this.toggle('year')}
  />
```

###### 平铺选择器
```jsx
<DatePickerView
  mode="date"
  onChange={(value) => {
    console.log('datePickerView => ', value);
  }}
  />
```

### DateSelect（日期选择器表单控件）
```jsx
<DateSelect
  mode="datetime"
  format="yyyy年MM月dd日 HH时mm分"
  value={this.state.value}
  onChange={(value) => {
    this.setState({
      value,
    });
  }}
  />
```

### API

| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |
| :--- | :--- | :--- | :--- | :--- |
| prefixCls | string | za-picker | | 类名前缀 |
| className | string | | | 追加类名 |
| dataSource | object[] | [ ] | | 数据源 |
| value | string &#124; Date |  | | 值 |
| defaultValue | string &#124; Date |  | | 初始值 |
| valueMember | string | 'value' | | 值字段对应的key |
| mode | string | date | `year`, `month`, `date`, `time`, `datetime` | 指定日期选择模式 |
| min | string | | | 相应mode的最小时间 |
| max | string | | | 相应mode的最大时间 |
| minuteStep | number | 1 | | 分钟间隔 |
| wheelDefaultValue | string | | | 滚轮默认值 |
| disabled | boolean | false | | 是否禁用 |
| onChange | <code>(value?: object) => void</code> | noop | \(value: object\) | 值变化时触发的回调函数 |

#### 仅 DatePicker & DateSelect 支持的属性
| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |
| :--- | :--- | :--- | :--- | :--- |
| visible | boolean | false | | 是否展示 |
| title | string | '请选择' | | 选择器标题 |
| cancelText | string | '取消' | | 取消栏文字 |
| okText | string | '确定' | | 确定栏文字 |
| onOk | <code>(value?: object) => void</code> | noop | \(value: object\) | 点击确定时触发的回调函数 | 
| onCancel | <code>() => void</code> | noop | | 点击取消时触发的回调函数 |
| onMaskClick | <code>() => void</code> | noop | | 点击遮罩层时触发的回调函数 |

#### 仅 DateSelect 支持的属性
| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |
| :--- | :--- | :--- | :--- | :--- |
| placeholder | string | '请选择' | | 输入提示信息 |
| format | string | | 例：YYYY年MM月DD日<br /> 年:`YYYY`, 月:`MM`, 日:`DD`, 时:`hh`, 分:`mm`。| 格式化显示值 |
