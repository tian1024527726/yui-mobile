# 文本 Label

[demo页面](http://47.102.138.2/yui.mobile/#/label)

### 引入

```js
import { Label } from 'yzt-rui';
```

### 代码演示

#### 基本用法


###### 尺寸
```jsx
<Label size='large'>Large font-size=1.125rem 基准 18px</Label>
<Label size='medium'>Medium font-size=1.125rem 基准 16px</Label>
<Label>Normal (Default) font-size=0.875rem 基准 14px</Label>
<Label size='small'>Small font-size=0.75rem 基准 14px</Label>
```

###### 颜色
```jsx
<Label>Default</Label>
<Label color='white'>White</Label>
<Label color='black'>Black</Label>
<Label color='light'>Light</Label>
<Label color='dark'>Dark</Label>
<Label color='primary'>Primay</Label>
<Label color='info'>Info</Label>
<Label color='link'>Link</Label>
<Label color='warning'>Warning</Label>
<Label color='danger'>Danger</Label>
<Label color='success'>Success</Label>
<Label color='grey'>Grey</Label>
<Label color='grey-darker'>Grey-darker</Label>
<Label color='grey-dark'>Grey-dark</Label>
<Label color='black-bis'>Black-bis</Label>
<Label color='black-ter'>Black-ter</Label>
<Label color='white-ter'>White-ter</Label>
<Label color='white-bis'>White-bis</Label>
<Label color='grey-light'>Grey-light</Label>
<Label color='grey-lighter'>Grey-lighter</Label>
```

### API

| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |
| :--- | :--- | :--- | :--- | :--- |
| className | string | - | - | 追加类名 |
| size | string | - | `small`, `medium` ,`large`  | 尺寸 |
| color | string | - | `white`, `black`, `light`, `dark`, `primary`, `info`, `link`, `warning`, `danger`, `success`, `grey`, `grey-darker`, `black-bis`, `black-ter`, `white-ter`, `white-bis`, `grey-light`, `grey-lighter` | 颜色 |





