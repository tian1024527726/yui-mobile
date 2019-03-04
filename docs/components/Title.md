# 标题 Title

[demo页面](http://47.102.138.2/yui.mobile/#/title)

### 引入

```js
import { Title } from 'yzt-rui';
```

### 代码演示

#### 基本用法

###### 尺寸
```jsx
<Title size='1'>Size-1 3rem 基准 48px</Title>
<Title size='2'>Size-2 2.375rem 基准 38px</Title>
<Title size='3'>Size-3 (Default) 1.5rem 基准 24px</Title>
<Title size='4'>Size-4 1.125rem 基准 18px</Title>
<Title size='5'>Size-5 1rem 基准 16px</Title>
<Title size='6'>Size-6 0.875rem 基准 14px</Title>
<Title size='7'>Size-6 0.75rem 基准 14px</Title>
```

###### 字体颜色
```jsx
<Title color='white'>短期意外伤害保险</Title>
<Title color='black'>短期意外伤害保险</Title>
```

### API

| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |
| :--- | :--- | :--- | :--- | :--- |
| className | string | - | - | 追加类名 |
| size | string | `3` | `1`, `2`, `3`, `4`, `5`, `6`, `7`  | 尺寸 |
| color | string | `black(#363636)` | `black(#363636)`, `white(#FFF)`  | 字体颜色 |






