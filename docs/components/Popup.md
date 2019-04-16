# 弹出框 Popup

[demo页面](https://yyb323.com/yui.mobile/popup)

### 引入

```js
import { Popup } from 'yzt-rui';
```

### 代码演示

#### 基本用法

###### 自定义
```jsx
<Popup
  visible={this.state.showStatus}
  onMaskClick={() => { this.setState({ showStatus: false }) }}
  direction='right'
>
  <div style={{ height: '100%', width: '10rem', backgroundColor: '#fff' }}>
    Hello World!!!!!右方
  </div>
</Popup>
```


### API

| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |
| :--- | :--- | :--- | :--- | :--- |
| className | string | | | 追加类名 |
| visible | boolean | false | | 是否显示 |
| direction | string | `bottom` | `top`, `bottom`, `left`, `right` | 弹出方向 |
| animationDuration | number | 300 | | 动画执行时间（单位：毫秒） |
| mask | bool | true | | 是否渲染遮罩层 |
| maskType | string | `normal` | `transparent`, `normal` | 遮罩层的类型 |
| onMaskClick | <code>() => void</code> | noop | | 点击遮罩层时触发的回调函数 |



