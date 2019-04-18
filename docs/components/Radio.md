# 单选框 Radio

[demo页面](https://yyb323.com/yui.mobile/radio)

### 引入

```js
import { Radio } from 'yzt-rui';
```

### 代码演示

#### 基本用法

###### 单独使用
```jsx
<Radio
  value='radio'
  checked={checked}
  onChange={() => { this.setState({ checked: true }) }}
/>
```

###### 组合使用
```jsx
<RadioGroup name='a' defaultValue='1' onChange={(value) => { console.log(value) }} >
  <Radio value='1'>
    <span>快速赎回</span>
  </Radio>
  <Radio value='2'>
    <span>普通赎回</span>
  </Radio>
</RadioGroup>
```

#### 按钮样式

###### 普通
```jsx
<RadioGroup type='button' name='day' onChange={(value) => { console.log(value) }} >
  <Radio.Button value='a'>7天</Radio.Button>
  <Radio.Button value='b'>30天</Radio.Button>
  <Radio.Button value='c'>3个月</Radio.Button>
</RadioGroup>
```

###### 指定默认值
```jsx
<RadioGroup type='button' name='day' onChange={(value) => { console.log(value) }} defaultValue='a'>
  <Radio.Button value='a'>7天</Radio.Button>
  <Radio.Button value='b'>30天</Radio.Button>
  <Radio.Button value='c'>3个月</Radio.Button>
</RadioGroup>
```


#### 块级样式
```jsx
<RadioGroup name='a' defaultValue='1' onChange={(value) => { console.log(value) }} >
  <Radio value='1' type={'block'}>
    <span>快速赎回</span>
  </Radio>
  <Radio value='2' type={'block'}>
    <span>普通赎回</span>
  </Radio>
</RadioGroup>
```



### API

#### Radio

| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |
| :--- | :--- | :--- | :--- | :--- |
| className | string | | | 追加类名 |
| type | string | `normal` | `button`, `normal` | 显示类型 |
| checked | boolean | | | 当前是否选中 |
| onChange | (e: event) => void | | \(e: event\) | 值变化时触发的回调函数 |

#### Radio.Button

| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |
| :--- | :--- | :--- | :--- | :--- |
| className | string | | | 追加类名 |
| checked | boolean | | | 当前是否选中 |
| value | any | | | 内容 |

#### Radio.Group

| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |
| :--- | :--- | :--- | :--- | :--- |
| className | string | | | 追加类名 |
| name | string | | | radio的name |
| defaultValue | string | | | 初始选中值 |
| value | string | | | 选中值 |
| onChange | <code>(value: string) => void</code> | noop | \(value: string \) | 值变化时触发的回调函数 |



