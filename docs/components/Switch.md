# 开关 Switch

[demo页面](https://yyb323.com/yui.mobile/#/switch)

### 引入

```js
import { Switch } from 'yzt-rui';
```

### 代码演示

#### 基本用法

###### 普通
```jsx
<Switch
  checked={this.state.value}
  onChange={(value) => {
    this.setState({ value });
  }}
/>
```

###### 尺寸
```jsx
<Switch size='xs'/>
<Switch size='s'/>
<Switch size='sm'/>
<Switch size='dm'/>
<Switch size='m'/>
<Switch size='sl'/>
```


###### 设置默认值（开启）
```jsx
<Switch defaultChecked />
```


### API

| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |
| :--- | :--- | :--- | :--- | :--- |
| className | string | | | 追加类名 |
| size | string | `default` | `xs`, `s`, `sm`, `dm`, `m`, `sl`, `l`, `xl`, `xxl`, `xxxl` | 主题 |
| checked | boolean | - | | 值 |
| defaultChecked | boolean | false | | 值 |
| onChange | <code>(value: boolean) => void</code> | | \(value: boolean\) | 值变化时触发的回调函数 |




