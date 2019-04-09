# 图标 Icon

[demo页面](https://yyb323.com/yui.mobile/#/icon)

### 引入

```js
import { Icon } from 'yzt-rui';
```

### 代码演示

#### 基本用法

###### 普通
```jsx
<Icon type='arrow-right'></Icon>
<Icon type='warning'></Icon>
<Icon type='clear'></Icon>
<Icon type='claim'></Icon>
<Icon type='keyboard-close'></Icon>
```

###### 尺寸
```jsx
<Icon size='m' type='keyboard-close'></Icon>
<Icon type='keyboard-close'></Icon>
<Icon size='s' type='keyboard-close'></Icon>
```

### API

| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |
| :--- | :--- | :--- | :--- | :--- |
| className | string | - | - | 追加类名 |
| size | string | - | `xs`, `s`, `sm`, `dm`, `m`, `sl`, `l`  | 尺寸 |
| type | string | - | `arrow-right`, `warning`, `clear`, `claim`, `keyboard-close`, `keyboard-close`, `keyboard-close`, `info`, `customer` | 图标类型 |





