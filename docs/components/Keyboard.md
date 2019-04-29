# 轻提示 Keyboard

[demo页面](https://yyb323.com/yui.mobile/keyboard)

### 引入

```js
import { Keyboard, Popup } from 'yzt-rui';
```

### 代码演示

#### 配置Popup组件使用Keyboard
```js
<Popup
  mask={false}
  visible={this.state.visible}
>
  <KeyBoard
    type={keyboardType}
    onKeyClick={(key) => { console.lgo(key) }}
  />
</Popup>
```

### API

| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |
| :--- | :--- | :--- | :--- | :--- |
| className | string |  |  | 追加类名 |
| type | string | `numberWithConfirm` | `number`， `numberWithConfirm`, `numberWithClose`, `numberWithConfirmClose`, `numberWithX` | 键盘类型 |
| onKeyClick | <code>(key: string) => void</code> |  |  | 点击按钮触发毁掉函数 |
| canConfirm | bool | true |  | 是否禁止点击确定按钮 |


