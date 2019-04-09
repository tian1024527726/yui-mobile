# 标签页 Tabs

[demo页面](https://yyb323.com/yui.mobile/#/tabs)

### 引入

```js
import { Tabs, Label } from 'yzt-rui';
```

### 代码演示

#### 基本用法

###### normal类型
```jsx
<Tabs onChange={(k) => { console.log(k) }}>
  <TabPane tab={<div><Label nodeType='p' size='small'>七日年化收益率</Label><Label nodeType='p' size='small'>4.0290%</Label></div>} key='1'>
    content1
  </TabPane>
  <TabPane tab={<div><Label nodeType='p' size='small'>万分收益</Label><Label nodeType='p' size='small'>1.0581元</Label></div>} key='2'>
    content2
  </TabPane>
</Tabs>
```

###### filled类型
```jsx
<Tabs onChange={(k) => { console.log(k) }} type='filled'>
  <TabPane tab={<div><Label nodeType='p' size='medium'>基础款</Label></div>} key='1'>
    content1
  </TabPane>
  <TabPane tab={<div><Label nodeType='p' size='medium'>热销款</Label></div>} key='2'>
    content2
  </TabPane>
  <TabPane tab={<div><Label nodeType='p' size='medium'>全面款</Label></div>} key='3'>
    content3
  </TabPane>
</Tabs>
```

###### underline类型
```jsx
<Tabs onChange={(k) => { console.log(k) }} type='underline'>
  <TabPane tab={<div><Label nodeType='p' size='medium'>基础款</Label></div>} key='1'>
    content1
  </TabPane>
  <TabPane tab={<div><Label nodeType='p' size='medium'>热销款</Label></div>} key='2'>
    content2
  </TabPane>
  <TabPane tab={<div><Label nodeType='p' size='medium'>全面款</Label></div>} key='3'>
    content3
  </TabPane>
</Tabs>
```

###### activeColor种类
```jsx
<Tabs onChange={(k) => { console.log(k) }} activeColor='yellow'>
  <TabPane tab={<div><Label nodeType='p' size='small'>七日年化收益率</Label><Label nodeType='p' size='small'>4.0290%</Label></div>} key='1'>
    content1
  </TabPane>
  <TabPane tab={<div><Label nodeType='p' size='small'>万分收益</Label><Label nodeType='p' size='small'>1.0581元</Label></div>} key='2'>
    content2
  </TabPane>
</Tabs>
```

###### activeKey受控组件
```jsx
<Tabs onChange={(k) => { this.setState({ activeKey: k }) }} type='filled' activeColor='yellow' activeKey={activeKey}>
  <TabPane tab={<div><Label nodeType='p' size='medium'>基础款</Label></div>} key='1'>
    受控的tabs1
  </TabPane>
  <TabPane tab={<div><Label nodeType='p' size='medium'>热销款</Label></div>} key='2'>
    受控的tabs2
  </TabPane>
</Tabs>
```



### API

#### Tab

| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |
| :--- | :--- | :--- | :--- | :--- |
| className | string | - | - | 追加类名 |
| defaultActiveKey | string | - | - | 初始化选中面板的 key，如果没有设置 activeKey |
| activekey | string | - | - | 当前激活 tab 面板的 key |
| type | string | normal | `normal`, `filled`,  `underline` | 页签的基本样式 |
| activeColor | string | `blue`, `oringe`, `yellow`, `purple`, `green` | - | 线条宽度 |
| onChange | <code>(index: string) => void</code> | noop | \(index: string\) | 切换面板的回调 |


#### Tab.Panel

| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |
| :--- | :--- | :--- | :--- | :--- |
| className | string | - | - | 追加类名 |
| tab | string &#124; ReactNode | - | - | 选项卡头显示文字 |
| key | string | - | - | 对应 activeKey |




