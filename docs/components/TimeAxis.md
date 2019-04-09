# 时间轴 TimeAxis

[demo页面](https://yyb323.com/yui.mobile/#/timeaxis)

### 引入

```js
import { TimeAxis } from 'yzt-rui';
```

### 代码演示

#### 基本用法

###### 水平方向
```jsx
<TimeAxis
  dataList={[
    {
      text: '申请提交',
      time: '预计2017-12-30 23:22',
    },
    {
      text: '订单确认失败',
      time: '2017-12-31 23:22',
    },
    {
      text: '退款到账',
      time: '预计2018-01-01 24:00前',
    },
  ]}
  currentStep={2}
/>
```

###### 垂直方向
```jsx
<TimeAxis
  direction='v'
  dataList={[
    {
      text: '申请提交',
      time: '预计2017-12-30 23:22',
    },
    {
      text: '订单确认失败',
      time: '2017-12-31 23:22',
    },
    {
      text: '退款到账',
      time: '预计2018-01-01 24:00前',
    },
  ]}
  currentStep={2}
/>
```

### API

| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |
| :--- | :--- | :--- | :--- | :--- |
| className | string | - | - | 追加类名 |
| direction | string | `h` | `v`, `h` | 方向 |
| dataList | string | - | - | 数据 |
| currentStep | number | 1 | - | 进度，初始值是1 |






